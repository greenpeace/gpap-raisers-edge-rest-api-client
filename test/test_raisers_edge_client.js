const assert = require('assert');
const { RaisersEdgeRestAPI } = require('../raisers_edge_rest_api');

describe('Raisers Edge REST API Client', () => {
  describe('Constituent endpoints', () => {
    it('Should get a Constituent using the Constituent Read endpoint', (done) => {
      RaisersEdgeRestAPI.Constituent.Read(null, '02238-593-0002929950')// , 'addresses=1&phones=1')
        .then(({ body, error, response }) => {
          // 'Sharni Campbell',
          console.log(body);
          done();
        });
    }).timeout(20000);

    it('Should Search the RE MSSQL Database for an existing constituent', (done) => {
      const first_name = 'Amelia'; // TODO: chhange this
      const bday_db_format = '19950519';
      const bday_re_format = '19/05/1995';
      const email = 'amelia.gray@live.com';
      const mobile = '0400919471';

      const existing_persons_details = `
				ID in
				(
				select RECORDS.ID
				from RECORDS join PHONES on RECORDS.ID = PHONES.CONSTIT_ID		
				where 
				RECORDS.first_name = '${first_name}' 	and
				RECORDS.birth_date = '${bday_db_format}'		and	
					(
						PHONES.num = '${email}'		or
						PHONES.num = '${mobile}'	or
						PHONES.num = ''
					)
				)
			`; // TODO: replace these

      RaisersEdgeRestAPI.Constituent.Search(null, existing_persons_details)
        .then((result) => {
          const { body, response } = result;
          const { constituents } = body;

          assert.equal(response.statusCode, 200);
          assert.equal(constituents.length, 1);

          const [constituent] = constituents;
          assert.equal(constituent.RECORDS_fld_FIRST_NAME, first_name);
          assert.equal(constituent.RECORDS_fld_BIRTH_DATE, bday_re_format);

          done();
        })
        .catch(done);
    }).timeout(20000);
  });

  describe('Gift endpoint', () => {
    it('Should see ammendments alter the value of GIFT_fld_Date_1st_Pay on a CGift', (done) => {
      const gift_id = '02238-545-0014816810';

      RaisersEdgeRestAPI.Gift.Read(null, gift_id)
        .then((result_first_gift) => {
          const { body, response } = result_first_gift;
          console.log(body);

          const gift_orig = body.gift;
          const orig_date = gift_orig.GIFT_fld_Date;
          const moment = require('moment');
          const moment_date = moment(orig_date, 'D/M/YYYY');

          moment_date.add(2, 'month');

          const new_date = moment_date.format('DD/MM/YYYY');
          const date_day = moment_date.isoWeekday();

          console.log(orig_date, new_date);


          const schedule_amendment = {
            AMENDMENT_fld_Date: new_date,
            AMENDMENT_fld_Schedule_WeeklyDayOfWeek: date_day,
          };

          RaisersEdgeRestAPI.Gift.CreateAmendment({ gift: schedule_amendment }, gift_id)
            .then((result_amendment) => {
              console.log(result_amendment.body);
              console.log(result_amendment.body.gift.GIFT_fld_Date_1st_Pay, new_date);
              const moment = require('moment');
              assert.equal(moment(new_date, 'D/M/YYYY').format('DD/MM/YYYY'), moment(result_amendment.body.gift.GIFT_fld_Date_1st_Pay, 'D/M/YYYY').format('DD/MM/YYYY'));
              done();
			})
			.catch(done);
        });
    }).timeout(60000);
  });
});
