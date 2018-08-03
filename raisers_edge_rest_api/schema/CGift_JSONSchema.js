/**
 * This JSON schema fully describes the CGift from the Raiser's Edge REST API.
 * This object can be manipulated using the /gift endpoint.
 * This document was generated using the tool at https://www.jsonschema.net/.
 */
exports.CGift_Schema = {
    $id: 'http://example.com/example.json',
    type: 'object',
    definitions: {},
    $schema: 'http://json-schema.org/draft-07/schema#',
    properties: {
        gift: {
            $id: '/properties/gift',
            type: 'object',
            properties: {
                GIFT_fld_AMPAUCTIONDB: {
                    $id: '/properties/gift/properties/GIFT_fld_AMPAUCTIONDB',
                    type: 'string',
                    title: 'The Gift_fld_ampauctiondb Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_AMPPEOPLEDB: {
                    $id: '/properties/gift/properties/GIFT_fld_AMPPEOPLEDB',
                    type: 'string',
                    title: 'The Gift_fld_amppeopledb Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_AMPPEOPLEID: {
                    $id: '/properties/gift/properties/GIFT_fld_AMPPEOPLEID',
                    type: 'string',
                    title: 'The Gift_fld_amppeopleid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_AccountID: {
                    $id: '/properties/gift/properties/GIFT_fld_AccountID',
                    type: 'string',
                    title: 'The Gift_fld_accountid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_AckLetterActionID: {
                    $id: '/properties/gift/properties/GIFT_fld_AckLetterActionID',
                    type: 'string',
                    title: 'The Gift_fld_ackletteractionid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Acknowledge_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_Acknowledge_Date',
                    type: 'string',
                    title: 'The Gift_fld_acknowledge_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Acknowledge_Flag: {
                    $id: '/properties/gift/properties/GIFT_fld_Acknowledge_Flag',
                    type: 'string',
                    title: 'The Gift_fld_acknowledge_flag Schema ',
                    default: '',
                    examples: [
                        'Not Acknowledged',
                    ],
                },
                GIFT_fld_AddedById: {
                    $id: '/properties/gift/properties/GIFT_fld_AddedById',
                    type: 'string',
                    title: 'The Gift_fld_addedbyid Schema ',
                    default: '',
                    examples: [
                        '417',
                    ],
                },
                GIFT_fld_Adjustment_ForSaleOfStock: {
                    $id: '/properties/gift/properties/GIFT_fld_Adjustment_ForSaleOfStock',
                    type: 'string',
                    title: 'The Gift_fld_adjustment_forsaleofstock Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Adjustment_Notes: {
                    $id: '/properties/gift/properties/GIFT_fld_Adjustment_Notes',
                    type: 'string',
                    title: 'The Gift_fld_adjustment_notes Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Adjustment_PrevAmount: {
                    $id: '/properties/gift/properties/GIFT_fld_Adjustment_PrevAmount',
                    type: 'integer',
                    title: 'The Gift_fld_adjustment_prevamount Schema ',
                    default: 0,
                    examples: [
                        35,
                    ],
                },
                GIFT_fld_Adjustment_PrevBrokerFee: {
                    $id: '/properties/gift/properties/GIFT_fld_Adjustment_PrevBrokerFee',
                    type: 'string',
                    title: 'The Gift_fld_adjustment_prevbrokerfee Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Adjustment_PrevSaleAmount: {
                    $id: '/properties/gift/properties/GIFT_fld_Adjustment_PrevSaleAmount',
                    type: 'string',
                    title: 'The Gift_fld_adjustment_prevsaleamount Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Adjustment_PrevSubType: {
                    $id: '/properties/gift/properties/GIFT_fld_Adjustment_PrevSubType',
                    type: 'string',
                    title: 'The Gift_fld_adjustment_prevsubtype Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Adjustment_PrevTaxCanBeClaimed: {
                    $id: '/properties/gift/properties/GIFT_fld_Adjustment_PrevTaxCanBeClaimed',
                    type: 'string',
                    title: 'The Gift_fld_adjustment_prevtaxcanbeclaimed Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Adjustment_PrevTaxClaimAmount: {
                    $id: '/properties/gift/properties/GIFT_fld_Adjustment_PrevTaxClaimAmount',
                    type: 'string',
                    title: 'The Gift_fld_adjustment_prevtaxclaimamount Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_AdvanceNoticeSentDate: {
                    $id: '/properties/gift/properties/GIFT_fld_AdvanceNoticeSentDate',
                    type: 'string',
                    title: 'The Gift_fld_advancenoticesentdate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Amount: {
                    $id: '/properties/gift/properties/GIFT_fld_Amount',
                    type: 'string',
                    title: 'The Gift_fld_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                GIFT_fld_Amount_Bills: {
                    $id: '/properties/gift/properties/GIFT_fld_Amount_Bills',
                    type: 'string',
                    title: 'The Gift_fld_amount_bills Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Amount_Coins: {
                    $id: '/properties/gift/properties/GIFT_fld_Amount_Coins',
                    type: 'string',
                    title: 'The Gift_fld_amount_coins Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Amount_Subject_To_VAT: {
                    $id: '/properties/gift/properties/GIFT_fld_Amount_Subject_To_VAT',
                    type: 'string',
                    title: 'The Gift_fld_amount_subject_to_vat Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Anonymous: {
                    $id: '/properties/gift/properties/GIFT_fld_Anonymous',
                    type: 'string',
                    title: 'The Gift_fld_anonymous Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Appeal: {
                    $id: '/properties/gift/properties/GIFT_fld_Appeal',
                    type: 'string',
                    title: 'The Gift_fld_appeal Schema ',
                    default: '',
                    examples: [
                        '18RGNew-F2F',
                    ],
                },
                GIFT_fld_ArchivedGift: {
                    $id: '/properties/gift/properties/GIFT_fld_ArchivedGift',
                    type: 'string',
                    title: 'The Gift_fld_archivedgift Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Authorization_Code: {
                    $id: '/properties/gift/properties/GIFT_fld_Authorization_Code',
                    type: 'string',
                    title: 'The Gift_fld_authorization_code Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_BBNCTransactions_ID: {
                    $id: '/properties/gift/properties/GIFT_fld_BBNCTransactions_ID',
                    type: 'string',
                    title: 'The Gift_fld_bbnctransactions_id Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Balance: {
                    $id: '/properties/gift/properties/GIFT_fld_Balance',
                    type: 'integer',
                    title: 'The Gift_fld_balance Schema ',
                    default: 0,
                    examples: [
                        0,
                    ],
                },
                GIFT_fld_Batch_Number: {
                    $id: '/properties/gift/properties/GIFT_fld_Batch_Number',
                    type: 'string',
                    title: 'The Gift_fld_batch_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Benefits_Include_Notes: {
                    $id: '/properties/gift/properties/GIFT_fld_Benefits_Include_Notes',
                    type: 'string',
                    title: 'The Gift_fld_benefits_include_notes Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Benefits_Notes: {
                    $id: '/properties/gift/properties/GIFT_fld_Benefits_Notes',
                    type: 'string',
                    title: 'The Gift_fld_benefits_notes Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_CPTransactionID: {
                    $id: '/properties/gift/properties/GIFT_fld_CPTransactionID',
                    type: 'string',
                    title: 'The Gift_fld_cptransactionid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Campaign: {
                    $id: '/properties/gift/properties/GIFT_fld_Campaign',
                    type: 'string',
                    title: 'The Gift_fld_campaign Schema ',
                    default: '',
                    examples: [
                        '2018',
                    ],
                },
                GIFT_fld_CardToken: {
                    $id: '/properties/gift/properties/GIFT_fld_CardToken',
                    type: 'string',
                    title: 'The Gift_fld_cardtoken Schema ',
                    default: '',
                    examples: [
                        'AA5917A6-8763-449C-BA65-9E9A8E1AFEDC',
                    ],
                },
                GIFT_fld_CardholderName: {
                    $id: '/properties/gift/properties/GIFT_fld_CardholderName',
                    type: 'string',
                    title: 'The Gift_fld_cardholdername Schema ',
                    default: '',
                    examples: [
                        'Glenn Heffernan',
                    ],
                },
                GIFT_fld_CashReceivedFromPGID: {
                    $id: '/properties/gift/properties/GIFT_fld_CashReceivedFromPGID',
                    type: 'string',
                    title: 'The Gift_fld_cashreceivedfrompgid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Check_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_Check_Date',
                    type: 'string',
                    title: 'The Gift_fld_check_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Check_Number: {
                    $id: '/properties/gift/properties/GIFT_fld_Check_Number',
                    type: 'string',
                    title: 'The Gift_fld_check_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Claim_Number: {
                    $id: '/properties/gift/properties/GIFT_fld_Claim_Number',
                    type: 'string',
                    title: 'The Gift_fld_claim_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Claim_RefundNumber: {
                    $id: '/properties/gift/properties/GIFT_fld_Claim_RefundNumber',
                    type: 'string',
                    title: 'The Gift_fld_claim_refundnumber Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_ConstitAddressID: {
                    $id: '/properties/gift/properties/GIFT_fld_ConstitAddressID',
                    type: 'string',
                    title: 'The Gift_fld_constitaddressid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_ConstitIsPolicyOwner: {
                    $id: '/properties/gift/properties/GIFT_fld_ConstitIsPolicyOwner',
                    type: 'string',
                    title: 'The Gift_fld_constitispolicyowner Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_ConstitPaysPremium: {
                    $id: '/properties/gift/properties/GIFT_fld_ConstitPaysPremium',
                    type: 'string',
                    title: 'The Gift_fld_constitpayspremium Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Constit_ID: {
                    $id: '/properties/gift/properties/GIFT_fld_Constit_ID',
                    type: 'string',
                    title: 'The Gift_fld_constit_id Schema ',
                    default: '',
                    examples: [
                        '1163719',
                    ],
                },
                GIFT_fld_ConstituentBankId: {
                    $id: '/properties/gift/properties/GIFT_fld_ConstituentBankId',
                    type: 'string',
                    title: 'The Gift_fld_constituentbankid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_ConstituentGift_Flag: {
                    $id: '/properties/gift/properties/GIFT_fld_ConstituentGift_Flag',
                    type: 'string',
                    title: 'The Gift_fld_constituentgift_flag Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_ConstituentIsBeneficiary: {
                    $id: '/properties/gift/properties/GIFT_fld_ConstituentIsBeneficiary',
                    type: 'string',
                    title: 'The Gift_fld_constituentisbeneficiary Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Constituent_Code: {
                    $id: '/properties/gift/properties/GIFT_fld_Constituent_Code',
                    type: 'string',
                    title: 'The Gift_fld_constituent_code Schema ',
                    default: '',
                    examples: [
                        'Whales Email List',
                    ],
                },
                GIFT_fld_Constituent_Name: {
                    $id: '/properties/gift/properties/GIFT_fld_Constituent_Name',
                    type: 'string',
                    title: 'The Gift_fld_constituent_name Schema ',
                    default: '',
                    examples: [
                        'Glenn Heffernan',
                    ],
                },
                GIFT_fld_Continuous: {
                    $id: '/properties/gift/properties/GIFT_fld_Continuous',
                    type: 'string',
                    title: 'The Gift_fld_continuous Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Converted_From_Pledge: {
                    $id: '/properties/gift/properties/GIFT_fld_Converted_From_Pledge',
                    type: 'string',
                    title: 'The Gift_fld_converted_from_pledge Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_CovenantRenewalForId: {
                    $id: '/properties/gift/properties/GIFT_fld_CovenantRenewalForId',
                    type: 'string',
                    title: 'The Gift_fld_covenantrenewalforid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_CovenantRenewedById: {
                    $id: '/properties/gift/properties/GIFT_fld_CovenantRenewedById',
                    type: 'string',
                    title: 'The Gift_fld_covenantrenewedbyid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Covenant_Number: {
                    $id: '/properties/gift/properties/GIFT_fld_Covenant_Number',
                    type: 'string',
                    title: 'The Gift_fld_covenant_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Credit_Card_Number: {
                    $id: '/properties/gift/properties/GIFT_fld_Credit_Card_Number',
                    type: 'string',
                    title: 'The Gift_fld_credit_card_number Schema ',
                    default: '',
                    examples: [
                        '************0423',
                    ],
                },
                GIFT_fld_Credit_Type: {
                    $id: '/properties/gift/properties/GIFT_fld_Credit_Type',
                    type: 'string',
                    title: 'The Gift_fld_credit_type Schema ',
                    default: '',
                    examples: [
                        'V',
                    ],
                },
                GIFT_fld_CurrencyAmount_ForDisplay: {
                    $id: '/properties/gift/properties/GIFT_fld_CurrencyAmount_ForDisplay',
                    type: 'string',
                    title: 'The Gift_fld_currencyamount_fordisplay Schema ',
                    default: '',
                    examples: [
                        '$35.00',
                    ],
                },
                GIFT_fld_CurrencyReceiptAmount_ForDisplay: {
                    $id: '/properties/gift/properties/GIFT_fld_CurrencyReceiptAmount_ForDisplay',
                    type: 'string',
                    title: 'The Gift_fld_currencyreceiptamount_fordisplay Schema ',
                    default: '',
                    examples: [
                        '$35.00',
                    ],
                },
                GIFT_fld_Currency_Amount: {
                    $id: '/properties/gift/properties/GIFT_fld_Currency_Amount',
                    type: 'string',
                    title: 'The Gift_fld_currency_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                GIFT_fld_Currency_Country: {
                    $id: '/properties/gift/properties/GIFT_fld_Currency_Country',
                    type: 'string',
                    title: 'The Gift_fld_currency_country Schema ',
                    default: '',
                    examples: [
                        'Australia',
                    ],
                },
                GIFT_fld_Currency_Exchange_Rate: {
                    $id: '/properties/gift/properties/GIFT_fld_Currency_Exchange_Rate',
                    type: 'string',
                    title: 'The Gift_fld_currency_exchange_rate Schema ',
                    default: '',
                    examples: [
                        '1',
                    ],
                },
                GIFT_fld_Currency_Receipt_Amount: {
                    $id: '/properties/gift/properties/GIFT_fld_Currency_Receipt_Amount',
                    type: 'string',
                    title: 'The Gift_fld_currency_receipt_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                GIFT_fld_DDIReceivedDate: {
                    $id: '/properties/gift/properties/GIFT_fld_DDIReceivedDate',
                    type: 'string',
                    title: 'The Gift_fld_ddireceiveddate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_DDISource: {
                    $id: '/properties/gift/properties/GIFT_fld_DDISource',
                    type: 'string',
                    title: 'The Gift_fld_ddisource Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_Date',
                    type: 'string',
                    title: 'The Gift_fld_date Schema ',
                    default: '',
                    examples: [
                        '20/07/2018',
                    ],
                },
                GIFT_fld_DateAdded: {
                    $id: '/properties/gift/properties/GIFT_fld_DateAdded',
                    type: 'string',
                    title: 'The Gift_fld_dateadded Schema ',
                    default: '',
                    examples: [
                        '21/07/2018 5:30:29 PM',
                    ],
                },
                GIFT_fld_DateChanged: {
                    $id: '/properties/gift/properties/GIFT_fld_DateChanged',
                    type: 'string',
                    title: 'The Gift_fld_datechanged Schema ',
                    default: '',
                    examples: [
                        '25/07/2018 3:03:06 PM',
                    ],
                },
                GIFT_fld_Date_1st_Pay: {
                    $id: '/properties/gift/properties/GIFT_fld_Date_1st_Pay',
                    type: 'string',
                    title: 'The Gift_fld_date_1st_pay Schema ',
                    default: '',
                    examples: [
                        '26/07/2018',
                    ],
                },
                GIFT_fld_Date_1st_Premium: {
                    $id: '/properties/gift/properties/GIFT_fld_Date_1st_Premium',
                    type: 'string',
                    title: 'The Gift_fld_date_1st_premium Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Description: {
                    $id: '/properties/gift/properties/GIFT_fld_Description',
                    type: 'string',
                    title: 'The Gift_fld_description Schema ',
                    default: '',
                    examples: [
                        '20/07/2018 Recurring Gift $35.00 - Glenn Heffernan',
                    ],
                },
                GIFT_fld_DiscountRate: {
                    $id: '/properties/gift/properties/GIFT_fld_DiscountRate',
                    type: 'string',
                    title: 'The Gift_fld_discountrate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Drawer: {
                    $id: '/properties/gift/properties/GIFT_fld_Drawer',
                    type: 'string',
                    title: 'The Gift_fld_drawer Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_EFT_Id: {
                    $id: '/properties/gift/properties/GIFT_fld_EFT_Id',
                    type: 'string',
                    title: 'The Gift_fld_eft_id Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_EnvelopeID: {
                    $id: '/properties/gift/properties/GIFT_fld_EnvelopeID',
                    type: 'string',
                    title: 'The Gift_fld_envelopeid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_ExpectedMaturityYear: {
                    $id: '/properties/gift/properties/GIFT_fld_ExpectedMaturityYear',
                    type: 'string',
                    title: 'The Gift_fld_expectedmaturityyear Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Expires_On: {
                    $id: '/properties/gift/properties/GIFT_fld_Expires_On',
                    type: 'string',
                    title: 'The Gift_fld_expires_on Schema ',
                    default: '',
                    examples: [
                        '06/2020',
                    ],
                },
                GIFT_fld_FinderNumber: {
                    $id: '/properties/gift/properties/GIFT_fld_FinderNumber',
                    type: 'string',
                    title: 'The Gift_fld_findernumber Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_FlexibleDeferred: {
                    $id: '/properties/gift/properties/GIFT_fld_FlexibleDeferred',
                    type: 'string',
                    title: 'The Gift_fld_flexibledeferred Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_FrequencyDescription: {
                    $id: '/properties/gift/properties/GIFT_fld_FrequencyDescription',
                    type: 'string',
                    title: 'The Gift_fld_frequencydescription Schema ',
                    default: '',
                    examples: [
                        'Transactions due every 4 weeks on Thursday',
                    ],
                },
                GIFT_fld_Fund: {
                    $id: '/properties/gift/properties/GIFT_fld_Fund',
                    type: 'string',
                    title: 'The Gift_fld_fund Schema ',
                    default: '',
                    examples: [
                        'A14014000C',
                    ],
                },
                GIFT_fld_GLJournalReference: {
                    $id: '/properties/gift/properties/GIFT_fld_GLJournalReference',
                    type: 'string',
                    title: 'The Gift_fld_gljournalreference Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GLReversalConstitId: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalConstitId',
                    type: 'string',
                    title: 'The Gift_fld_glreversalconstitid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GLReversalConstituentID: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalConstituentID',
                    type: 'string',
                    title: 'The Gift_fld_glreversalconstituentid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GLReversalConstituentName: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalConstituentName',
                    type: 'string',
                    title: 'The Gift_fld_glreversalconstituentname Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GLReversalFirstName: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalFirstName',
                    type: 'string',
                    title: 'The Gift_fld_glreversalfirstname Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GLReversalKeyName: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalKeyName',
                    type: 'string',
                    title: 'The Gift_fld_glreversalkeyname Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GLReversalMiddleName: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalMiddleName',
                    type: 'string',
                    title: 'The Gift_fld_glreversalmiddlename Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GLReversalOriginalGiftID: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalOriginalGiftID',
                    type: 'string',
                    title: 'The Gift_fld_glreversaloriginalgiftid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GLReversalOriginalGiftType: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalOriginalGiftType',
                    type: 'string',
                    title: 'The Gift_fld_glreversaloriginalgifttype Schema ',
                    default: '',
                    examples: [
                        'Cash',
                    ],
                },
                GIFT_fld_GLReversalPostDate: {
                    $id: '/properties/gift/properties/GIFT_fld_GLReversalPostDate',
                    type: 'string',
                    title: 'The Gift_fld_glreversalpostdate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_GiftAidQualificationMethod: {
                    $id: '/properties/gift/properties/GIFT_fld_GiftAidQualificationMethod',
                    type: 'string',
                    title: 'The Gift_fld_giftaidqualificationmethod Schema ',
                    default: '',
                    examples: [
                        'Apply Gift Aid Rules',
                    ],
                },
                GIFT_fld_GiftAidQualificationStatus: {
                    $id: '/properties/gift/properties/GIFT_fld_GiftAidQualificationStatus',
                    type: 'string',
                    title: 'The Gift_fld_giftaidqualificationstatus Schema ',
                    default: '',
                    examples: [
                        'Not Qualified for Gift Aid',
                    ],
                },
                GIFT_fld_GiftStatusDate: {
                    $id: '/properties/gift/properties/GIFT_fld_GiftStatusDate',
                    type: 'string',
                    title: 'The Gift_fld_giftstatusdate Schema ',
                    default: '',
                    examples: [
                        '21/07/2018',
                    ],
                },
                GIFT_fld_GiftSubType: {
                    $id: '/properties/gift/properties/GIFT_fld_GiftSubType',
                    type: 'string',
                    title: 'The Gift_fld_giftsubtype Schema ',
                    default: '',
                    examples: [
                        'Four Week',
                    ],
                },
                GIFT_fld_Gift_Code: {
                    $id: '/properties/gift/properties/GIFT_fld_Gift_Code',
                    type: 'string',
                    title: 'The Gift_fld_gift_code Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Gift_Status: {
                    $id: '/properties/gift/properties/GIFT_fld_Gift_Status',
                    type: 'string',
                    title: 'The Gift_fld_gift_status Schema ',
                    default: '',
                    examples: [
                        'Active',
                    ],
                },
                GIFT_fld_GrossAmount: {
                    $id: '/properties/gift/properties/GIFT_fld_GrossAmount',
                    type: 'integer',
                    title: 'The Gift_fld_grossamount Schema ',
                    default: 0,
                    examples: [
                        35,
                    ],
                },
                GIFT_fld_GrossBalance: {
                    $id: '/properties/gift/properties/GIFT_fld_GrossBalance',
                    type: 'integer',
                    title: 'The Gift_fld_grossbalance Schema ',
                    default: 0,
                    examples: [
                        0,
                    ],
                },
                GIFT_fld_HonMemNames: {
                    $id: '/properties/gift/properties/GIFT_fld_HonMemNames',
                    type: 'string',
                    title: 'The Gift_fld_honmemnames Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_ID: {
                    $id: '/properties/gift/properties/GIFT_fld_ID',
                    type: 'string',
                    title: 'The Gift_fld_id Schema ',
                    default: '',
                    examples: [
                        '14819703',
                    ],
                },
                GIFT_fld_Import_Id: {
                    $id: '/properties/gift/properties/GIFT_fld_Import_Id',
                    type: 'string',
                    title: 'The Gift_fld_import_id Schema ',
                    default: '',
                    examples: [
                        'F2FIID-APEX5146851',
                    ],
                },
                GIFT_fld_Installment_Frequency: {
                    $id: '/properties/gift/properties/GIFT_fld_Installment_Frequency',
                    type: 'string',
                    title: 'The Gift_fld_installment_frequency Schema ',
                    default: '',
                    examples: [
                        'Weekly',
                    ],
                },
                GIFT_fld_InstructionCancelDate: {
                    $id: '/properties/gift/properties/GIFT_fld_InstructionCancelDate',
                    type: 'string',
                    title: 'The Gift_fld_instructioncanceldate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_InstructionSentDate: {
                    $id: '/properties/gift/properties/GIFT_fld_InstructionSentDate',
                    type: 'string',
                    title: 'The Gift_fld_instructionsentdate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_InstructionSetupDate: {
                    $id: '/properties/gift/properties/GIFT_fld_InstructionSetupDate',
                    type: 'string',
                    title: 'The Gift_fld_instructionsetupdate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_InstructionType: {
                    $id: '/properties/gift/properties/GIFT_fld_InstructionType',
                    type: 'string',
                    title: 'The Gift_fld_instructiontype Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_InsuranceCarrier: {
                    $id: '/properties/gift/properties/GIFT_fld_InsuranceCarrier',
                    type: 'string',
                    title: 'The Gift_fld_insurancecarrier Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_IsOnlineGift: {
                    $id: '/properties/gift/properties/GIFT_fld_IsOnlineGift',
                    type: 'string',
                    title: 'The Gift_fld_isonlinegift Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Issuer: {
                    $id: '/properties/gift/properties/GIFT_fld_Issuer',
                    type: 'string',
                    title: 'The Gift_fld_issuer Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Issuer_Median_Price: {
                    $id: '/properties/gift/properties/GIFT_fld_Issuer_Median_Price',
                    type: 'string',
                    title: 'The Gift_fld_issuer_median_price Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Issuer_Num_Units: {
                    $id: '/properties/gift/properties/GIFT_fld_Issuer_Num_Units',
                    type: 'string',
                    title: 'The Gift_fld_issuer_num_units Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Issuer_Symbol: {
                    $id: '/properties/gift/properties/GIFT_fld_Issuer_Symbol',
                    type: 'string',
                    title: 'The Gift_fld_issuer_symbol Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_LastChangedById: {
                    $id: '/properties/gift/properties/GIFT_fld_LastChangedById',
                    type: 'string',
                    title: 'The Gift_fld_lastchangedbyid Schema ',
                    default: '',
                    examples: [
                        '417',
                    ],
                },
                GIFT_fld_Last_Prenote_Sent_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_Last_Prenote_Sent_Date',
                    type: 'string',
                    title: 'The Gift_fld_last_prenote_sent_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Letter_Code: {
                    $id: '/properties/gift/properties/GIFT_fld_Letter_Code',
                    type: 'string',
                    title: 'The Gift_fld_letter_code Schema ',
                    default: '',
                    examples: [
                        'FOTRW',
                    ],
                },
                GIFT_fld_LinkedToCashGift: {
                    $id: '/properties/gift/properties/GIFT_fld_LinkedToCashGift',
                    type: 'boolean',
                    title: 'The Gift_fld_linkedtocashgift Schema ',
                    default: false,
                    examples: [
                        false,
                    ],
                },
                GIFT_fld_LinkedToPlannedGift: {
                    $id: '/properties/gift/properties/GIFT_fld_LinkedToPlannedGift',
                    type: 'integer',
                    title: 'The Gift_fld_linkedtoplannedgift Schema ',
                    default: 0,
                    examples: [
                        0,
                    ],
                },
                GIFT_fld_MG_Source_Constit_Id: {
                    $id: '/properties/gift/properties/GIFT_fld_MG_Source_Constit_Id',
                    type: 'string',
                    title: 'The Gift_fld_mg_source_constit_id Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_MailingID: {
                    $id: '/properties/gift/properties/GIFT_fld_MailingID',
                    type: 'string',
                    title: 'The Gift_fld_mailingid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_NPVAsOf: {
                    $id: '/properties/gift/properties/GIFT_fld_NPVAsOf',
                    type: 'string',
                    title: 'The Gift_fld_npvasof Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_NetPresentValue: {
                    $id: '/properties/gift/properties/GIFT_fld_NetPresentValue',
                    type: 'string',
                    title: 'The Gift_fld_netpresentvalue Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_NextPremiumDate: {
                    $id: '/properties/gift/properties/GIFT_fld_NextPremiumDate',
                    type: 'null',
                    title: 'The Gift_fld_nextpremiumdate Schema ',
                    default: null,
                    examples: [
                        null,
                    ],
                },
                GIFT_fld_NextTransactionDate: {
                    $id: '/properties/gift/properties/GIFT_fld_NextTransactionDate',
                    type: 'string',
                    title: 'The Gift_fld_nexttransactiondate Schema ',
                    default: '',
                    examples: [
                        '26/07/2018',
                    ],
                },
                GIFT_fld_Number_of_Installments: {
                    $id: '/properties/gift/properties/GIFT_fld_Number_of_Installments',
                    type: 'string',
                    title: 'The Gift_fld_number_of_installments Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Number_of_Years: {
                    $id: '/properties/gift/properties/GIFT_fld_Number_of_Years',
                    type: 'string',
                    title: 'The Gift_fld_number_of_years Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_OrderType: {
                    $id: '/properties/gift/properties/GIFT_fld_OrderType',
                    type: 'string',
                    title: 'The Gift_fld_ordertype Schema ',
                    default: '',
                    examples: [
                        'Telephone',
                    ],
                },
                GIFT_fld_Original_Pledge_Amount: {
                    $id: '/properties/gift/properties/GIFT_fld_Original_Pledge_Amount',
                    type: 'string',
                    title: 'The Gift_fld_original_pledge_amount Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_PIFName: {
                    $id: '/properties/gift/properties/GIFT_fld_PIFName',
                    type: 'string',
                    title: 'The Gift_fld_pifname Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PIFNumUnits: {
                    $id: '/properties/gift/properties/GIFT_fld_PIFNumUnits',
                    type: 'string',
                    title: 'The Gift_fld_pifnumunits Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PIFPercentage: {
                    $id: '/properties/gift/properties/GIFT_fld_PIFPercentage',
                    type: 'string',
                    title: 'The Gift_fld_pifpercentage Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PIFTotalUnits: {
                    $id: '/properties/gift/properties/GIFT_fld_PIFTotalUnits',
                    type: 'string',
                    title: 'The Gift_fld_piftotalunits Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Package: {
                    $id: '/properties/gift/properties/GIFT_fld_Package',
                    type: 'string',
                    title: 'The Gift_fld_package Schema ',
                    default: '',
                    examples: [
                        'APEX',
                    ],
                },
                GIFT_fld_Payment_Type: {
                    $id: '/properties/gift/properties/GIFT_fld_Payment_Type',
                    type: 'string',
                    title: 'The Gift_fld_payment_type Schema ',
                    default: '',
                    examples: [
                        'Credit Card',
                    ],
                },
                GIFT_fld_PayoutAmount: {
                    $id: '/properties/gift/properties/GIFT_fld_PayoutAmount',
                    type: 'string',
                    title: 'The Gift_fld_payoutamount Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PayoutPercent: {
                    $id: '/properties/gift/properties/GIFT_fld_PayoutPercent',
                    type: 'string',
                    title: 'The Gift_fld_payoutpercent Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PlannedGiftID: {
                    $id: '/properties/gift/properties/GIFT_fld_PlannedGiftID',
                    type: 'string',
                    title: 'The Gift_fld_plannedgiftid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PlannedGiftStatus: {
                    $id: '/properties/gift/properties/GIFT_fld_PlannedGiftStatus',
                    type: 'string',
                    title: 'The Gift_fld_plannedgiftstatus Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PolicyFaceAmount: {
                    $id: '/properties/gift/properties/GIFT_fld_PolicyFaceAmount',
                    type: 'string',
                    title: 'The Gift_fld_policyfaceamount Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PolicyNumber: {
                    $id: '/properties/gift/properties/GIFT_fld_PolicyNumber',
                    type: 'string',
                    title: 'The Gift_fld_policynumber Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PolicyPremium: {
                    $id: '/properties/gift/properties/GIFT_fld_PolicyPremium',
                    type: 'string',
                    title: 'The Gift_fld_policypremium Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_PolicyType: {
                    $id: '/properties/gift/properties/GIFT_fld_PolicyType',
                    type: 'string',
                    title: 'The Gift_fld_policytype Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Post_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_Post_Date',
                    type: 'string',
                    title: 'The Gift_fld_post_date Schema ',
                    default: '',
                    examples: [
                        '21/07/2018',
                    ],
                },
                GIFT_fld_Post_Status: {
                    $id: '/properties/gift/properties/GIFT_fld_Post_Status',
                    type: 'string',
                    title: 'The Gift_fld_post_status Schema ',
                    default: '',
                    examples: [
                        'Not Posted',
                    ],
                },
                GIFT_fld_PotentialTaxClaimAmount: {
                    $id: '/properties/gift/properties/GIFT_fld_PotentialTaxClaimAmount',
                    type: 'integer',
                    title: 'The Gift_fld_potentialtaxclaimamount Schema ',
                    default: 0,
                    examples: [
                        0,
                    ],
                },
                GIFT_fld_PremiumFullyPaid: {
                    $id: '/properties/gift/properties/GIFT_fld_PremiumFullyPaid',
                    type: 'string',
                    title: 'The Gift_fld_premiumfullypaid Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Premium_DayOfMonth: {
                    $id: '/properties/gift/properties/GIFT_fld_Premium_DayOfMonth',
                    type: 'string',
                    title: 'The Gift_fld_premium_dayofmonth Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Premium_EndDate: {
                    $id: '/properties/gift/properties/GIFT_fld_Premium_EndDate',
                    type: 'string',
                    title: 'The Gift_fld_premium_enddate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Premium_Frequency: {
                    $id: '/properties/gift/properties/GIFT_fld_Premium_Frequency',
                    type: 'string',
                    title: 'The Gift_fld_premium_frequency Schema ',
                    default: '',
                    examples: [
                        'Annually',
                    ],
                },
                GIFT_fld_Premium_Month: {
                    $id: '/properties/gift/properties/GIFT_fld_Premium_Month',
                    type: 'string',
                    title: 'The Gift_fld_premium_month Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Premium_ScheduleDescription: {
                    $id: '/properties/gift/properties/GIFT_fld_Premium_ScheduleDescription',
                    type: 'string',
                    title: 'The Gift_fld_premium_scheduledescription Schema ',
                    default: '',
                    examples: [
                        'Transactions due every 4 weeks on Thursday',
                    ],
                },
                GIFT_fld_Premium_Spacing: {
                    $id: '/properties/gift/properties/GIFT_fld_Premium_Spacing',
                    type: 'string',
                    title: 'The Gift_fld_premium_spacing Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Premium_StartDate: {
                    $id: '/properties/gift/properties/GIFT_fld_Premium_StartDate',
                    type: 'string',
                    title: 'The Gift_fld_premium_startdate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_ProcessedByEFT: {
                    $id: '/properties/gift/properties/GIFT_fld_ProcessedByEFT',
                    type: 'string',
                    title: 'The Gift_fld_processedbyeft Schema ',
                    default: '',
                    examples: [
                        '-1',
                    ],
                },
                GIFT_fld_R185_Date_Returned: {
                    $id: '/properties/gift/properties/GIFT_fld_R185_Date_Returned',
                    type: 'string',
                    title: 'The Gift_fld_r185_date_returned Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_R185_Date_Sent: {
                    $id: '/properties/gift/properties/GIFT_fld_R185_Date_Sent',
                    type: 'string',
                    title: 'The Gift_fld_r185_date_sent Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Realized: {
                    $id: '/properties/gift/properties/GIFT_fld_Realized',
                    type: 'string',
                    title: 'The Gift_fld_realized Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_ReceiptStack: {
                    $id: '/properties/gift/properties/GIFT_fld_ReceiptStack',
                    type: 'string',
                    title: 'The Gift_fld_receiptstack Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Receipt_Amount: {
                    $id: '/properties/gift/properties/GIFT_fld_Receipt_Amount',
                    type: 'string',
                    title: 'The Gift_fld_receipt_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                GIFT_fld_Receipt_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_Receipt_Date',
                    type: 'string',
                    title: 'The Gift_fld_receipt_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Receipt_Flag: {
                    $id: '/properties/gift/properties/GIFT_fld_Receipt_Flag',
                    type: 'string',
                    title: 'The Gift_fld_receipt_flag Schema ',
                    default: '',
                    examples: [
                        'Not Receipted',
                    ],
                },
                GIFT_fld_Receipt_Number: {
                    $id: '/properties/gift/properties/GIFT_fld_Receipt_Number',
                    type: 'string',
                    title: 'The Gift_fld_receipt_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Received: {
                    $id: '/properties/gift/properties/GIFT_fld_Received',
                    type: 'string',
                    title: 'The Gift_fld_received Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Reference: {
                    $id: '/properties/gift/properties/GIFT_fld_Reference',
                    type: 'string',
                    title: 'The Gift_fld_reference Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Reference_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_Reference_Date',
                    type: 'string',
                    title: 'The Gift_fld_reference_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Reference_Number: {
                    $id: '/properties/gift/properties/GIFT_fld_Reference_Number',
                    type: 'string',
                    title: 'The Gift_fld_reference_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_RefundTaxClaim: {
                    $id: '/properties/gift/properties/GIFT_fld_RefundTaxClaim',
                    type: 'string',
                    title: 'The Gift_fld_refundtaxclaim Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_RemainderAsOf: {
                    $id: '/properties/gift/properties/GIFT_fld_RemainderAsOf',
                    type: 'string',
                    title: 'The Gift_fld_remainderasof Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_RemainderValue: {
                    $id: '/properties/gift/properties/GIFT_fld_RemainderValue',
                    type: 'string',
                    title: 'The Gift_fld_remaindervalue Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Remind_Flag: {
                    $id: '/properties/gift/properties/GIFT_fld_Remind_Flag',
                    type: 'string',
                    title: 'The Gift_fld_remind_flag Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_ReplacementGiftID: {
                    $id: '/properties/gift/properties/GIFT_fld_ReplacementGiftID',
                    type: 'string',
                    title: 'The Gift_fld_replacementgiftid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_ResendAdvanceNotice: {
                    $id: '/properties/gift/properties/GIFT_fld_ResendAdvanceNotice',
                    type: 'string',
                    title: 'The Gift_fld_resendadvancenotice Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_ReversePosting: {
                    $id: '/properties/gift/properties/GIFT_fld_ReversePosting',
                    type: 'string',
                    title: 'The Gift_fld_reverseposting Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Revocable: {
                    $id: '/properties/gift/properties/GIFT_fld_Revocable',
                    type: 'string',
                    title: 'The Gift_fld_revocable Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_SaleStock_Broker_Fee: {
                    $id: '/properties/gift/properties/GIFT_fld_SaleStock_Broker_Fee',
                    type: 'string',
                    title: 'The Gift_fld_salestock_broker_fee Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_SaleStock_Notes: {
                    $id: '/properties/gift/properties/GIFT_fld_SaleStock_Notes',
                    type: 'string',
                    title: 'The Gift_fld_salestock_notes Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_SaleStock_Post_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_SaleStock_Post_Date',
                    type: 'string',
                    title: 'The Gift_fld_salestock_post_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_SaleStock_Post_Status: {
                    $id: '/properties/gift/properties/GIFT_fld_SaleStock_Post_Status',
                    type: 'string',
                    title: 'The Gift_fld_salestock_post_status Schema ',
                    default: '',
                    examples: [
                        'Not Posted',
                    ],
                },
                GIFT_fld_SaleStock_Sale_Amount: {
                    $id: '/properties/gift/properties/GIFT_fld_SaleStock_Sale_Amount',
                    type: 'string',
                    title: 'The Gift_fld_salestock_sale_amount Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_SaleStock_Sale_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_SaleStock_Sale_Date',
                    type: 'string',
                    title: 'The Gift_fld_salestock_sale_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_DayOfMonth: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_DayOfMonth',
                    type: 'string',
                    title: 'The Gift_fld_schedule_dayofmonth Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_DayOfMonth2: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_DayOfMonth2',
                    type: 'string',
                    title: 'The Gift_fld_schedule_dayofmonth2 Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_EndDate: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_EndDate',
                    type: 'string',
                    title: 'The Gift_fld_schedule_enddate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_Month: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_Month',
                    type: 'string',
                    title: 'The Gift_fld_schedule_month Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_MonthlyDayOfWeek: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_MonthlyDayOfWeek',
                    type: 'string',
                    title: 'The Gift_fld_schedule_monthlydayofweek Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_MonthlyOrdinal: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_MonthlyOrdinal',
                    type: 'string',
                    title: 'The Gift_fld_schedule_monthlyordinal Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_MonthlyType: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_MonthlyType',
                    type: 'string',
                    title: 'The Gift_fld_schedule_monthlytype Schema ',
                    default: '',
                    examples: [
                        'User Defined Day',
                    ],
                },
                GIFT_fld_Schedule_SMDayType1: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_SMDayType1',
                    type: 'string',
                    title: 'The Gift_fld_schedule_smdaytype1 Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_SMDayType2: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_SMDayType2',
                    type: 'string',
                    title: 'The Gift_fld_schedule_smdaytype2 Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Schedule_Spacing: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_Spacing',
                    type: 'string',
                    title: 'The Gift_fld_schedule_spacing Schema ',
                    default: '',
                    examples: [
                        '4',
                    ],
                },
                GIFT_fld_Schedule_WeeklyDayOfWeek: {
                    $id: '/properties/gift/properties/GIFT_fld_Schedule_WeeklyDayOfWeek',
                    type: 'string',
                    title: 'The Gift_fld_schedule_weeklydayofweek Schema ',
                    default: '',
                    examples: [
                        '16',
                    ],
                },
                GIFT_fld_SendInstruction: {
                    $id: '/properties/gift/properties/GIFT_fld_SendInstruction',
                    type: 'string',
                    title: 'The Gift_fld_sendinstruction Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_SendPrenotification: {
                    $id: '/properties/gift/properties/GIFT_fld_SendPrenotification',
                    type: 'string',
                    title: 'The Gift_fld_sendprenotification Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Send_Prenote_Units: {
                    $id: '/properties/gift/properties/GIFT_fld_Send_Prenote_Units',
                    type: 'string',
                    title: 'The Gift_fld_send_prenote_units Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_SolicitorNames: {
                    $id: '/properties/gift/properties/GIFT_fld_SolicitorNames',
                    type: 'string',
                    title: 'The Gift_fld_solicitornames Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_SourceCode: {
                    $id: '/properties/gift/properties/GIFT_fld_SourceCode',
                    type: 'string',
                    title: 'The Gift_fld_sourcecode Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Standing_Order_Sent: {
                    $id: '/properties/gift/properties/GIFT_fld_Standing_Order_Sent',
                    type: 'string',
                    title: 'The Gift_fld_standing_order_sent Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_Standing_Order_Sent_Date: {
                    $id: '/properties/gift/properties/GIFT_fld_Standing_Order_Sent_Date',
                    type: 'string',
                    title: 'The Gift_fld_standing_order_sent_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_TaxCanBeClaimed: {
                    $id: '/properties/gift/properties/GIFT_fld_TaxCanBeClaimed',
                    type: 'string',
                    title: 'The Gift_fld_taxcanbeclaimed Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_TaxClaimAdjustmentReason: {
                    $id: '/properties/gift/properties/GIFT_fld_TaxClaimAdjustmentReason',
                    type: 'string',
                    title: 'The Gift_fld_taxclaimadjustmentreason Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_TaxClaimAmount: {
                    $id: '/properties/gift/properties/GIFT_fld_TaxClaimAmount',
                    type: 'integer',
                    title: 'The Gift_fld_taxclaimamount Schema ',
                    default: 0,
                    examples: [
                        0,
                    ],
                },
                GIFT_fld_TaxEligibleCovenant: {
                    $id: '/properties/gift/properties/GIFT_fld_TaxEligibleCovenant',
                    type: 'string',
                    title: 'The Gift_fld_taxeligiblecovenant Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_TermEndDate: {
                    $id: '/properties/gift/properties/GIFT_fld_TermEndDate',
                    type: 'string',
                    title: 'The Gift_fld_termenddate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_TermType: {
                    $id: '/properties/gift/properties/GIFT_fld_TermType',
                    type: 'string',
                    title: 'The Gift_fld_termtype Schema ',
                    default: '',
                    examples: [
                        'Fixed Term',
                    ],
                },
                GIFT_fld_TotalRealized: {
                    $id: '/properties/gift/properties/GIFT_fld_TotalRealized',
                    type: 'null',
                    title: 'The Gift_fld_totalrealized Schema ',
                    default: null,
                    examples: [
                        null,
                    ],
                },
                GIFT_fld_TransactionPending: {
                    $id: '/properties/gift/properties/GIFT_fld_TransactionPending',
                    type: 'string',
                    title: 'The Gift_fld_transactionpending Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_TrustTaxID: {
                    $id: '/properties/gift/properties/GIFT_fld_TrustTaxID',
                    type: 'string',
                    title: 'The Gift_fld_trusttaxid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Type: {
                    $id: '/properties/gift/properties/GIFT_fld_Type',
                    type: 'string',
                    title: 'The Gift_fld_type Schema ',
                    default: '',
                    examples: [
                        'Recurring Gift',
                    ],
                },
                GIFT_fld_UseAdjPostDateForRevPostDate: {
                    $id: '/properties/gift/properties/GIFT_fld_UseAdjPostDateForRevPostDate',
                    type: 'string',
                    title: 'The Gift_fld_useadjpostdateforrevpostdate Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_UserGiftId: {
                    $id: '/properties/gift/properties/GIFT_fld_UserGiftId',
                    type: 'string',
                    title: 'The Gift_fld_usergiftid Schema ',
                    default: '',
                    examples: [
                        'APEX5146851',
                    ],
                },
                GIFT_fld_VAT_Amount_Charged: {
                    $id: '/properties/gift/properties/GIFT_fld_VAT_Amount_Charged',
                    type: 'string',
                    title: 'The Gift_fld_vat_amount_charged Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_VAT_Tax_Code: {
                    $id: '/properties/gift/properties/GIFT_fld_VAT_Tax_Code',
                    type: 'string',
                    title: 'The Gift_fld_vat_tax_code Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_Variance: {
                    $id: '/properties/gift/properties/GIFT_fld_Variance',
                    type: 'string',
                    title: 'The Gift_fld_variance Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                GIFT_fld_VarianceDescription: {
                    $id: '/properties/gift/properties/GIFT_fld_VarianceDescription',
                    type: 'string',
                    title: 'The Gift_fld_variancedescription Schema ',
                    default: '',
                    examples: [
                        '$0.00 weekly',
                    ],
                },
                GIFT_fld_Vehicle: {
                    $id: '/properties/gift/properties/GIFT_fld_Vehicle',
                    type: 'string',
                    title: 'The Gift_fld_vehicle Schema ',
                    default: '',
                    examples: [
                        'Bequest',
                    ],
                },
                GIFT_fld_VoucherAgency: {
                    $id: '/properties/gift/properties/GIFT_fld_VoucherAgency',
                    type: 'string',
                    title: 'The Gift_fld_voucheragency Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                GIFT_fld_YearsInTerm: {
                    $id: '/properties/gift/properties/GIFT_fld_YearsInTerm',
                    type: 'string',
                    title: 'The Gift_fld_yearsinterm Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Acknowledge_Date: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Acknowledge_Date',
                    type: 'string',
                    title: 'The Matchinggift_fld_acknowledge_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Acknowledge_Flag: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Acknowledge_Flag',
                    type: 'string',
                    title: 'The Matchinggift_fld_acknowledge_flag Schema ',
                    default: '',
                    examples: [
                        'Not Acknowledged',
                    ],
                },
                MATCHINGGIFT_fld_AddedById: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_AddedById',
                    type: 'string',
                    title: 'The Matchinggift_fld_addedbyid Schema ',
                    default: '',
                    examples: [
                        '417',
                    ],
                },
                MATCHINGGIFT_fld_AdvanceNoticeSentDate: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_AdvanceNoticeSentDate',
                    type: 'string',
                    title: 'The Matchinggift_fld_advancenoticesentdate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Amount: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Amount',
                    type: 'string',
                    title: 'The Matchinggift_fld_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                MATCHINGGIFT_fld_Amount_Bills: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Amount_Bills',
                    type: 'string',
                    title: 'The Matchinggift_fld_amount_bills Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_Amount_Coins: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Amount_Coins',
                    type: 'string',
                    title: 'The Matchinggift_fld_amount_coins Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_Amount_Subject_To_VAT: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Amount_Subject_To_VAT',
                    type: 'string',
                    title: 'The Matchinggift_fld_amount_subject_to_vat Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_Anonymous: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Anonymous',
                    type: 'string',
                    title: 'The Matchinggift_fld_anonymous Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_Appeal: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Appeal',
                    type: 'string',
                    title: 'The Matchinggift_fld_appeal Schema ',
                    default: '',
                    examples: [
                        '18RGNew-F2F',
                    ],
                },
                MATCHINGGIFT_fld_Authorization_Code: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Authorization_Code',
                    type: 'string',
                    title: 'The Matchinggift_fld_authorization_code Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Batch_Number: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Batch_Number',
                    type: 'string',
                    title: 'The Matchinggift_fld_batch_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Benefits_Include_Notes: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Benefits_Include_Notes',
                    type: 'string',
                    title: 'The Matchinggift_fld_benefits_include_notes Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_Benefits_Notes: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Benefits_Notes',
                    type: 'string',
                    title: 'The Matchinggift_fld_benefits_notes Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Campaign: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Campaign',
                    type: 'string',
                    title: 'The Matchinggift_fld_campaign Schema ',
                    default: '',
                    examples: [
                        '2018',
                    ],
                },
                MATCHINGGIFT_fld_CardholderName: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_CardholderName',
                    type: 'string',
                    title: 'The Matchinggift_fld_cardholdername Schema ',
                    default: '',
                    examples: [
                        'Glenn Heffernan',
                    ],
                },
                MATCHINGGIFT_fld_Check_Date: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Check_Date',
                    type: 'string',
                    title: 'The Matchinggift_fld_check_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Check_Number: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Check_Number',
                    type: 'string',
                    title: 'The Matchinggift_fld_check_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Claim_Number: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Claim_Number',
                    type: 'string',
                    title: 'The Matchinggift_fld_claim_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Constit_ID: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Constit_ID',
                    type: 'string',
                    title: 'The Matchinggift_fld_constit_id Schema ',
                    default: '',
                    examples: [
                        '1163719',
                    ],
                },
                MATCHINGGIFT_fld_ConstituentBankId: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_ConstituentBankId',
                    type: 'string',
                    title: 'The Matchinggift_fld_constituentbankid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Constituent_Code: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Constituent_Code',
                    type: 'string',
                    title: 'The Matchinggift_fld_constituent_code Schema ',
                    default: '',
                    examples: [
                        'Whales Email List',
                    ],
                },
                MATCHINGGIFT_fld_Constituent_Name: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Constituent_Name',
                    type: 'string',
                    title: 'The Matchinggift_fld_constituent_name Schema ',
                    default: '',
                    examples: [
                        'Glenn Heffernan',
                    ],
                },
                MATCHINGGIFT_fld_Continuous: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Continuous',
                    type: 'string',
                    title: 'The Matchinggift_fld_continuous Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_Credit_Card_Number: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Credit_Card_Number',
                    type: 'string',
                    title: 'The Matchinggift_fld_credit_card_number Schema ',
                    default: '',
                    examples: [
                        '************0423',
                    ],
                },
                MATCHINGGIFT_fld_Credit_Type: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Credit_Type',
                    type: 'string',
                    title: 'The Matchinggift_fld_credit_type Schema ',
                    default: '',
                    examples: [
                        'V',
                    ],
                },
                MATCHINGGIFT_fld_CurrencyAmount_ForDisplay: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_CurrencyAmount_ForDisplay',
                    type: 'string',
                    title: 'The Matchinggift_fld_currencyamount_fordisplay Schema ',
                    default: '',
                    examples: [
                        '$35.00',
                    ],
                },
                MATCHINGGIFT_fld_CurrencyReceiptAmount_ForDisplay: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_CurrencyReceiptAmount_ForDisplay',
                    type: 'string',
                    title: 'The Matchinggift_fld_currencyreceiptamount_fordisplay Schema ',
                    default: '',
                    examples: [
                        '$35.00',
                    ],
                },
                MATCHINGGIFT_fld_Currency_Amount: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Currency_Amount',
                    type: 'string',
                    title: 'The Matchinggift_fld_currency_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                MATCHINGGIFT_fld_Currency_Country: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Currency_Country',
                    type: 'string',
                    title: 'The Matchinggift_fld_currency_country Schema ',
                    default: '',
                    examples: [
                        'Australia',
                    ],
                },
                MATCHINGGIFT_fld_Currency_Exchange_Rate: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Currency_Exchange_Rate',
                    type: 'string',
                    title: 'The Matchinggift_fld_currency_exchange_rate Schema ',
                    default: '',
                    examples: [
                        '1',
                    ],
                },
                MATCHINGGIFT_fld_Currency_Receipt_Amount: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Currency_Receipt_Amount',
                    type: 'string',
                    title: 'The Matchinggift_fld_currency_receipt_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                MATCHINGGIFT_fld_DDIReceivedDate: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_DDIReceivedDate',
                    type: 'string',
                    title: 'The Matchinggift_fld_ddireceiveddate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Date: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Date',
                    type: 'string',
                    title: 'The Matchinggift_fld_date Schema ',
                    default: '',
                    examples: [
                        '20/07/2018',
                    ],
                },
                MATCHINGGIFT_fld_DateAdded: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_DateAdded',
                    type: 'string',
                    title: 'The Matchinggift_fld_dateadded Schema ',
                    default: '',
                    examples: [
                        '21/07/2018 5:30:29 PM',
                    ],
                },
                MATCHINGGIFT_fld_DateChanged: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_DateChanged',
                    type: 'string',
                    title: 'The Matchinggift_fld_datechanged Schema ',
                    default: '',
                    examples: [
                        '25/07/2018 3:03:06 PM',
                    ],
                },
                MATCHINGGIFT_fld_Description: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Description',
                    type: 'string',
                    title: 'The Matchinggift_fld_description Schema ',
                    default: '',
                    examples: [
                        '20/07/2018 Recurring Gift $35.00 - Glenn Heffernan',
                    ],
                },
                MATCHINGGIFT_fld_Drawer: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Drawer',
                    type: 'string',
                    title: 'The Matchinggift_fld_drawer Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_EFT_Id: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_EFT_Id',
                    type: 'string',
                    title: 'The Matchinggift_fld_eft_id Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Expires_On: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Expires_On',
                    type: 'string',
                    title: 'The Matchinggift_fld_expires_on Schema ',
                    default: '',
                    examples: [
                        '06/2020',
                    ],
                },
                MATCHINGGIFT_fld_FrequencyDescription: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_FrequencyDescription',
                    type: 'string',
                    title: 'The Matchinggift_fld_frequencydescription Schema ',
                    default: '',
                    examples: [
                        'Transactions due every 4 weeks on Thursday',
                    ],
                },
                MATCHINGGIFT_fld_Fund: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Fund',
                    type: 'string',
                    title: 'The Matchinggift_fld_fund Schema ',
                    default: '',
                    examples: [
                        'A14014000C',
                    ],
                },
                MATCHINGGIFT_fld_GiftSubType: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_GiftSubType',
                    type: 'string',
                    title: 'The Matchinggift_fld_giftsubtype Schema ',
                    default: '',
                    examples: [
                        'Four Week',
                    ],
                },
                MATCHINGGIFT_fld_Gift_Code: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Gift_Code',
                    type: 'string',
                    title: 'The Matchinggift_fld_gift_code Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Id: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Id',
                    type: 'string',
                    title: 'The Matchinggift_fld_id Schema ',
                    default: '',
                    examples: [
                        '14819703',
                    ],
                },
                MATCHINGGIFT_fld_Import_Id: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Import_Id',
                    type: 'string',
                    title: 'The Matchinggift_fld_import_id Schema ',
                    default: '',
                    examples: [
                        'F2FIID-APEX5146851',
                    ],
                },
                MATCHINGGIFT_fld_InstructionCancelDate: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_InstructionCancelDate',
                    type: 'string',
                    title: 'The Matchinggift_fld_instructioncanceldate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_InstructionSentDate: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_InstructionSentDate',
                    type: 'string',
                    title: 'The Matchinggift_fld_instructionsentdate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_InstructionSetupDate: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_InstructionSetupDate',
                    type: 'string',
                    title: 'The Matchinggift_fld_instructionsetupdate Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_InstructionType: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_InstructionType',
                    type: 'string',
                    title: 'The Matchinggift_fld_instructiontype Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_LastChangedById: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_LastChangedById',
                    type: 'string',
                    title: 'The Matchinggift_fld_lastchangedbyid Schema ',
                    default: '',
                    examples: [
                        '417',
                    ],
                },
                MATCHINGGIFT_fld_Letter_Code: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Letter_Code',
                    type: 'string',
                    title: 'The Matchinggift_fld_letter_code Schema ',
                    default: '',
                    examples: [
                        'FOTRW',
                    ],
                },
                MATCHINGGIFT_fld_OrderType: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_OrderType',
                    type: 'string',
                    title: 'The Matchinggift_fld_ordertype Schema ',
                    default: '',
                    examples: [
                        'Telephone',
                    ],
                },
                MATCHINGGIFT_fld_Package: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Package',
                    type: 'string',
                    title: 'The Matchinggift_fld_package Schema ',
                    default: '',
                    examples: [
                        'APEX',
                    ],
                },
                MATCHINGGIFT_fld_Payment_Type: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Payment_Type',
                    type: 'string',
                    title: 'The Matchinggift_fld_payment_type Schema ',
                    default: '',
                    examples: [
                        'Credit Card',
                    ],
                },
                MATCHINGGIFT_fld_Post_Date: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Post_Date',
                    type: 'string',
                    title: 'The Matchinggift_fld_post_date Schema ',
                    default: '',
                    examples: [
                        '21/07/2018',
                    ],
                },
                MATCHINGGIFT_fld_Post_Status: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Post_Status',
                    type: 'string',
                    title: 'The Matchinggift_fld_post_status Schema ',
                    default: '',
                    examples: [
                        'Not Posted',
                    ],
                },
                MATCHINGGIFT_fld_ProcessedByEFT: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_ProcessedByEFT',
                    type: 'string',
                    title: 'The Matchinggift_fld_processedbyeft Schema ',
                    default: '',
                    examples: [
                        '-1',
                    ],
                },
                MATCHINGGIFT_fld_Receipt_Amount: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Receipt_Amount',
                    type: 'string',
                    title: 'The Matchinggift_fld_receipt_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                MATCHINGGIFT_fld_Receipt_Date: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Receipt_Date',
                    type: 'string',
                    title: 'The Matchinggift_fld_receipt_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Receipt_Flag: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Receipt_Flag',
                    type: 'string',
                    title: 'The Matchinggift_fld_receipt_flag Schema ',
                    default: '',
                    examples: [
                        'Not Receipted',
                    ],
                },
                MATCHINGGIFT_fld_Receipt_Number: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Receipt_Number',
                    type: 'string',
                    title: 'The Matchinggift_fld_receipt_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Received: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Received',
                    type: 'string',
                    title: 'The Matchinggift_fld_received Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_Reference: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Reference',
                    type: 'string',
                    title: 'The Matchinggift_fld_reference Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Reference_Date: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Reference_Date',
                    type: 'string',
                    title: 'The Matchinggift_fld_reference_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Reference_Number: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Reference_Number',
                    type: 'string',
                    title: 'The Matchinggift_fld_reference_number Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Remind_Flag: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Remind_Flag',
                    type: 'string',
                    title: 'The Matchinggift_fld_remind_flag Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_SendInstruction: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_SendInstruction',
                    type: 'string',
                    title: 'The Matchinggift_fld_sendinstruction Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_SolicitorNames: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_SolicitorNames',
                    type: 'string',
                    title: 'The Matchinggift_fld_solicitornames Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_Standing_Order_Sent: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Standing_Order_Sent',
                    type: 'string',
                    title: 'The Matchinggift_fld_standing_order_sent Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_Standing_Order_Sent_Date: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_Standing_Order_Sent_Date',
                    type: 'string',
                    title: 'The Matchinggift_fld_standing_order_sent_date Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld_TYPE: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_TYPE',
                    type: 'string',
                    title: 'The Matchinggift_fld_type Schema ',
                    default: '',
                    examples: [
                        'Recurring Gift',
                    ],
                },
                MATCHINGGIFT_fld_UserGiftId: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_UserGiftId',
                    type: 'string',
                    title: 'The Matchinggift_fld_usergiftid Schema ',
                    default: '',
                    examples: [
                        'APEX5146851',
                    ],
                },
                MATCHINGGIFT_fld_VAT_Amount_Charged: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_VAT_Amount_Charged',
                    type: 'string',
                    title: 'The Matchinggift_fld_vat_amount_charged Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                MATCHINGGIFT_fld_VAT_Tax_Code: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld_VAT_Tax_Code',
                    type: 'string',
                    title: 'The Matchinggift_fld_vat_tax_code Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                MATCHINGGIFT_fld__DDISource: {
                    $id: '/properties/gift/properties/MATCHINGGIFT_fld__DDISource',
                    type: 'string',
                    title: 'The Matchinggift_fld__ddisource Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                OTHER_GIFT_fld_ADDED_BY: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_ADDED_BY',
                    type: 'string',
                    title: 'The Other_gift_fld_added_by Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                OTHER_GIFT_fld_AMOUNT: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_AMOUNT',
                    type: 'string',
                    title: 'The Other_gift_fld_amount Schema ',
                    default: '',
                    examples: [
                        'Not Acknowledged',
                    ],
                },
                OTHER_GIFT_fld_COMMENTS: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_COMMENTS',
                    type: 'string',
                    title: 'The Other_gift_fld_comments Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                OTHER_GIFT_fld_DATE_ADDED: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_DATE_ADDED',
                    type: 'string',
                    title: 'The Other_gift_fld_date_added Schema ',
                    default: '',
                    examples: [
                        '2018',
                    ],
                },
                OTHER_GIFT_fld_DATE_GIVEN: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_DATE_GIVEN',
                    type: 'string',
                    title: 'The Other_gift_fld_date_given Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                OTHER_GIFT_fld_DATE_LAST_CHANGED: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_DATE_LAST_CHANGED',
                    type: 'string',
                    title: 'The Other_gift_fld_date_last_changed Schema ',
                    default: '',
                    examples: [
                        '18RGNew-F2F',
                    ],
                },
                OTHER_GIFT_fld_ID: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_ID',
                    type: 'string',
                    title: 'The Other_gift_fld_id Schema ',
                    default: '',
                    examples: [
                        '417',
                    ],
                },
                OTHER_GIFT_fld_IMPORT_ID: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_IMPORT_ID',
                    type: 'string',
                    title: 'The Other_gift_fld_import_id Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                OTHER_GIFT_fld_LAST_CHANGED_BY: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_LAST_CHANGED_BY',
                    type: 'string',
                    title: 'The Other_gift_fld_last_changed_by Schema ',
                    default: '',
                    examples: [
                        'A14014000C',
                    ],
                },
                OTHER_GIFT_fld_ORGANIZATION_ID: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_ORGANIZATION_ID',
                    type: 'string',
                    title: 'The Other_gift_fld_organization_id Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                OTHER_GIFT_fld_ORGANIZATION_NAME: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_ORGANIZATION_NAME',
                    type: 'string',
                    title: 'The Other_gift_fld_organization_name Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                OTHER_GIFT_fld_ORGANIZATION_TYPE: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_ORGANIZATION_TYPE',
                    type: 'string',
                    title: 'The Other_gift_fld_organization_type Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                OTHER_GIFT_fld_PROSPECT_ID: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_PROSPECT_ID',
                    type: 'string',
                    title: 'The Other_gift_fld_prospect_id Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                OTHER_GIFT_fld_REASON: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_REASON',
                    type: 'string',
                    title: 'The Other_gift_fld_reason Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                OTHER_GIFT_fld_SEQUENCE: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_SEQUENCE',
                    type: 'string',
                    title: 'The Other_gift_fld_sequence Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                OTHER_GIFT_fld_WF_FULLHASH: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_WF_FULLHASH',
                    type: 'string',
                    title: 'The Other_gift_fld_wf_fullhash Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                OTHER_GIFT_fld_WF_PARTIALHASH: {
                    $id: '/properties/gift/properties/OTHER_GIFT_fld_WF_PARTIALHASH',
                    type: 'string',
                    title: 'The Other_gift_fld_wf_partialhash Schema ',
                    default: '',
                    examples: [
                        'APEX',
                    ],
                },
                PROPOSALGIFT_fld_Amount: {
                    $id: '/properties/gift/properties/PROPOSALGIFT_fld_Amount',
                    type: 'string',
                    title: 'The Proposalgift_fld_amount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                PROPOSALGIFT_fld_GiftAmount: {
                    $id: '/properties/gift/properties/PROPOSALGIFT_fld_GiftAmount',
                    type: 'string',
                    title: 'The Proposalgift_fld_giftamount Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                PROPOSALGIFT_fld_GiftDate: {
                    $id: '/properties/gift/properties/PROPOSALGIFT_fld_GiftDate',
                    type: 'string',
                    title: 'The Proposalgift_fld_giftdate Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                PROPOSALGIFT_fld_GiftId: {
                    $id: '/properties/gift/properties/PROPOSALGIFT_fld_GiftId',
                    type: 'string',
                    title: 'The Proposalgift_fld_giftid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
                PROPOSALGIFT_fld_GiftName: {
                    $id: '/properties/gift/properties/PROPOSALGIFT_fld_GiftName',
                    type: 'string',
                    title: 'The Proposalgift_fld_giftname Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                PROPOSALGIFT_fld_GiftType: {
                    $id: '/properties/gift/properties/PROPOSALGIFT_fld_GiftType',
                    type: 'string',
                    title: 'The Proposalgift_fld_gifttype Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                PROPOSALGIFT_fld_ProposalGiftId: {
                    $id: '/properties/gift/properties/PROPOSALGIFT_fld_ProposalGiftId',
                    type: 'string',
                    title: 'The Proposalgift_fld_proposalgiftid Schema ',
                    default: '',
                    examples: [
                        'Not Acknowledged',
                    ],
                },
                PROPOSALGIFT_fld_ProposalId: {
                    $id: '/properties/gift/properties/PROPOSALGIFT_fld_ProposalId',
                    type: 'string',
                    title: 'The Proposalgift_fld_proposalid Schema ',
                    default: '',
                    examples: [
                        '417',
                    ],
                },
                TRANSACTIONGIFT_fld_AppliedAmount: {
                    $id: '/properties/gift/properties/TRANSACTIONGIFT_fld_AppliedAmount',
                    type: 'string',
                    title: 'The Transactiongift_fld_appliedamount Schema ',
                    default: '',
                    examples: [
                        '35',
                    ],
                },
                TRANSACTIONGIFT_fld_GiftAmount: {
                    $id: '/properties/gift/properties/TRANSACTIONGIFT_fld_GiftAmount',
                    type: 'string',
                    title: 'The Transactiongift_fld_giftamount Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                TRANSACTIONGIFT_fld_GiftDate: {
                    $id: '/properties/gift/properties/TRANSACTIONGIFT_fld_GiftDate',
                    type: 'string',
                    title: 'The Transactiongift_fld_giftdate Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                TRANSACTIONGIFT_fld_GiftID: {
                    $id: '/properties/gift/properties/TRANSACTIONGIFT_fld_GiftID',
                    type: 'string',
                    title: 'The Transactiongift_fld_giftid Schema ',
                    default: '',
                    examples: [
                        '417',
                    ],
                },
                TRANSACTIONGIFT_fld_GiftName: {
                    $id: '/properties/gift/properties/TRANSACTIONGIFT_fld_GiftName',
                    type: 'string',
                    title: 'The Transactiongift_fld_giftname Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                TRANSACTIONGIFT_fld_GiftType: {
                    $id: '/properties/gift/properties/TRANSACTIONGIFT_fld_GiftType',
                    type: 'string',
                    title: 'The Transactiongift_fld_gifttype Schema ',
                    default: '',
                    examples: [
                        '0',
                    ],
                },
                TRANSACTIONGIFT_fld_TransactionGiftID: {
                    $id: '/properties/gift/properties/TRANSACTIONGIFT_fld_TransactionGiftID',
                    type: 'string',
                    title: 'The Transactiongift_fld_transactiongiftid Schema ',
                    default: '',
                    examples: [
                        'Not Acknowledged',
                    ],
                },
                TRANSACTIONGIFT_fld_TransactionID: {
                    $id: '/properties/gift/properties/TRANSACTIONGIFT_fld_TransactionID',
                    type: 'string',
                    title: 'The Transactiongift_fld_transactionid Schema ',
                    default: '',
                    examples: [
                        '',
                    ],
                },
            },
        },
        splits: {
            $id: '/properties/splits',
            type: 'array',
            items: {
                $id: '/properties/splits/items',
                type: 'object',
                properties: {
                    GIFTSPLIT_fld_Amount: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Amount',
                        type: 'string',
                        title: 'The Giftsplit_fld_amount Schema ',
                        default: '',
                        examples: [
                            '35',
                        ],
                    },
                    GIFTSPLIT_fld_Appeal: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Appeal',
                        type: 'string',
                        title: 'The Giftsplit_fld_appeal Schema ',
                        default: '',
                        examples: [
                            '18RGNew-F2F',
                        ],
                    },
                    GIFTSPLIT_fld_Appeal_RECORDID: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Appeal_RECORDID',
                        type: 'string',
                        title: 'The Giftsplit_fld_appeal_recordid Schema ',
                        default: '',
                        examples: [
                            '6385',
                        ],
                    },
                    GIFTSPLIT_fld_Campaign: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Campaign',
                        type: 'string',
                        title: 'The Giftsplit_fld_campaign Schema ',
                        default: '',
                        examples: [
                            '2018',
                        ],
                    },
                    GIFTSPLIT_fld_Campaign_RECORDID: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Campaign_RECORDID',
                        type: 'string',
                        title: 'The Giftsplit_fld_campaign_recordid Schema ',
                        default: '',
                        examples: [
                            '131',
                        ],
                    },
                    GIFTSPLIT_fld_Fund: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Fund',
                        type: 'string',
                        title: 'The Giftsplit_fld_fund Schema ',
                        default: '',
                        examples: [
                            'A14014000C',
                        ],
                    },
                    GIFTSPLIT_fld_Fund_RECORDID: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Fund_RECORDID',
                        type: 'string',
                        title: 'The Giftsplit_fld_fund_recordid Schema ',
                        default: '',
                        examples: [
                            '189',
                        ],
                    },
                    GIFTSPLIT_fld_GiftAidQualificationMethod: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_GiftAidQualificationMethod',
                        type: 'string',
                        title: 'The Giftsplit_fld_giftaidqualificationmethod Schema ',
                        default: '',
                        examples: [
                            'Apply Gift Aid Rules',
                        ],
                    },
                    GIFTSPLIT_fld_GiftAidQualificationStatus: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_GiftAidQualificationStatus',
                        type: 'string',
                        title: 'The Giftsplit_fld_giftaidqualificationstatus Schema ',
                        default: '',
                        examples: [
                            'Not Qualified for Gift Aid',
                        ],
                    },
                    GIFTSPLIT_fld_GiftId: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_GiftId',
                        type: 'string',
                        title: 'The Giftsplit_fld_giftid Schema ',
                        default: '',
                        examples: [
                            '14819703',
                        ],
                    },
                    GIFTSPLIT_fld_GiftSplitId: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_GiftSplitId',
                        type: 'string',
                        title: 'The Giftsplit_fld_giftsplitid Schema ',
                        default: '',
                        examples: [
                            '20506429',
                        ],
                    },
                    GIFTSPLIT_fld_GrossAmount: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_GrossAmount',
                        type: 'integer',
                        title: 'The Giftsplit_fld_grossamount Schema ',
                        default: 0,
                        examples: [
                            35,
                        ],
                    },
                    GIFTSPLIT_fld_Import_Id: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Import_Id',
                        type: 'string',
                        title: 'The Giftsplit_fld_import_id Schema ',
                        default: '',
                        examples: [
                            '02238-553-0020506429',
                        ],
                    },
                    GIFTSPLIT_fld_Package: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Package',
                        type: 'string',
                        title: 'The Giftsplit_fld_package Schema ',
                        default: '',
                        examples: [
                            'APEX',
                        ],
                    },
                    GIFTSPLIT_fld_Package_RECORDID: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Package_RECORDID',
                        type: 'string',
                        title: 'The Giftsplit_fld_package_recordid Schema ',
                        default: '',
                        examples: [
                            '22091',
                        ],
                    },
                    GIFTSPLIT_fld_PotentialGrossAmount: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_PotentialGrossAmount',
                        type: 'integer',
                        title: 'The Giftsplit_fld_potentialgrossamount Schema ',
                        default: 0,
                        examples: [
                            35,
                        ],
                    },
                    GIFTSPLIT_fld_PotentialTaxClaimAmount: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_PotentialTaxClaimAmount',
                        type: 'integer',
                        title: 'The Giftsplit_fld_potentialtaxclaimamount Schema ',
                        default: 0,
                        examples: [
                            0,
                        ],
                    },
                    GIFTSPLIT_fld_Sequence: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_Sequence',
                        type: 'string',
                        title: 'The Giftsplit_fld_sequence Schema ',
                        default: '',
                        examples: [
                            '1',
                        ],
                    },
                    GIFTSPLIT_fld_TaxClaimAmount: {
                        $id: '/properties/splits/items/properties/GIFTSPLIT_fld_TaxClaimAmount',
                        type: 'integer',
                        title: 'The Giftsplit_fld_taxclaimamount Schema ',
                        default: 0,
                        examples: [
                            0,
                        ],
                    },
                },
            },
        },
        attributes: {
            $id: '/properties/attributes',
            type: 'array',
            items: {
                $id: '/properties/attributes/items',
                type: 'object',
                properties: {
                    Attribute_fld_ATTRIBUTEDATE: {
                        $id: '/properties/attributes/items/properties/Attribute_fld_ATTRIBUTEDATE',
                        type: 'string',
                        title: 'The Attribute_fld_attributedate Schema ',
                        default: '',
                        examples: [
                            '20/07/2018',
                        ],
                    },
                    Attribute_fld_ATTRIBUTES_ID: {
                        $id: '/properties/attributes/items/properties/Attribute_fld_ATTRIBUTES_ID',
                        type: 'string',
                        title: 'The Attribute_fld_attributes_id Schema ',
                        default: '',
                        examples: [
                            '14495737',
                        ],
                    },
                    Attribute_fld_ATTRIBUTETYPES_ID: {
                        $id: '/properties/attributes/items/properties/Attribute_fld_ATTRIBUTETYPES_ID',
                        type: 'string',
                        title: 'The Attribute_fld_attributetypes_id Schema ',
                        default: '',
                        examples: [
                            '467',
                        ],
                    },
                    Attribute_fld_COMMENTS: {
                        $id: '/properties/attributes/items/properties/Attribute_fld_COMMENTS',
                        type: 'string',
                        title: 'The Attribute_fld_comments Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    Attribute_fld_IMPORTID: {
                        $id: '/properties/attributes/items/properties/Attribute_fld_IMPORTID',
                        type: 'string',
                        title: 'The Attribute_fld_importid Schema ',
                        default: '',
                        examples: [
                            '02238-548-0014495737',
                        ],
                    },
                    Attribute_fld_PARENTID: {
                        $id: '/properties/attributes/items/properties/Attribute_fld_PARENTID',
                        type: 'string',
                        title: 'The Attribute_fld_parentid Schema ',
                        default: '',
                        examples: [
                            '14819703',
                        ],
                    },
                    Attribute_fld_SEQUENCE: {
                        $id: '/properties/attributes/items/properties/Attribute_fld_SEQUENCE',
                        type: 'string',
                        title: 'The Attribute_fld_sequence Schema ',
                        default: '',
                        examples: [
                            '1',
                        ],
                    },
                    Attribute_fld_VALUE: {
                        $id: '/properties/attributes/items/properties/Attribute_fld_VALUE',
                        type: 'string',
                        title: 'The Attribute_fld_value Schema ',
                        default: '',
                        examples: [
                            'NATIONAL AUSTRALIA BANK LTD.',
                        ],
                    },
                    GLTranAttribute_fld_ATTRIBUTEDATE: {
                        $id: '/properties/attributes/items/properties/GLTranAttribute_fld_ATTRIBUTEDATE',
                        type: 'string',
                        title: 'The Gltranattribute_fld_attributedate Schema ',
                        default: '',
                        examples: [
                            '20/07/2018',
                        ],
                    },
                    GLTranAttribute_fld_ATTRIBUTES_ID: {
                        $id: '/properties/attributes/items/properties/GLTranAttribute_fld_ATTRIBUTES_ID',
                        type: 'string',
                        title: 'The Gltranattribute_fld_attributes_id Schema ',
                        default: '',
                        examples: [
                            '14495737',
                        ],
                    },
                    GLTranAttribute_fld_ATTRIBUTETYPES_ID: {
                        $id: '/properties/attributes/items/properties/GLTranAttribute_fld_ATTRIBUTETYPES_ID',
                        type: 'string',
                        title: 'The Gltranattribute_fld_attributetypes_id Schema ',
                        default: '',
                        examples: [
                            '467',
                        ],
                    },
                    GLTranAttribute_fld_COMMENTS: {
                        $id: '/properties/attributes/items/properties/GLTranAttribute_fld_COMMENTS',
                        type: 'string',
                        title: 'The Gltranattribute_fld_comments Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    GLTranAttribute_fld_PARENTID: {
                        $id: '/properties/attributes/items/properties/GLTranAttribute_fld_PARENTID',
                        type: 'string',
                        title: 'The Gltranattribute_fld_parentid Schema ',
                        default: '',
                        examples: [
                            '14819703',
                        ],
                    },
                    GLTranAttribute_fld_SEQUENCE: {
                        $id: '/properties/attributes/items/properties/GLTranAttribute_fld_SEQUENCE',
                        type: 'string',
                        title: 'The Gltranattribute_fld_sequence Schema ',
                        default: '',
                        examples: [
                            '1',
                        ],
                    },
                    GLTranAttribute_fld_VALUE: {
                        $id: '/properties/attributes/items/properties/GLTranAttribute_fld_VALUE',
                        type: 'string',
                        title: 'The Gltranattribute_fld_value Schema ',
                        default: '',
                        examples: [
                            'NATIONAL AUSTRALIA BANK LTD.',
                        ],
                    },
                },
            },
        },
        installments: {
            $id: '/properties/installments',
            type: 'array',
        },
        recurring_gift_activities: {
            $id: '/properties/recurring_gift_activities',
            type: 'array',
            items: {
                $id: '/properties/recurring_gift_activities/items',
                type: 'object',
                properties: {
                    RECURRINGGIFTACTIVITY_fld_Acknowledge_Date: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Acknowledge_Date',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_acknowledge_date Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Acknowledge_Flag: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Acknowledge_Flag',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_acknowledge_flag Schema ',
                        default: '',
                        examples: [
                            'Not Acknowledged',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_ActivityType: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_ActivityType',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_activitytype Schema ',
                        default: '',
                        examples: [
                            'Payment',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_AddedById: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_AddedById',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_addedbyid Schema ',
                        default: '',
                        examples: [
                            '417',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Amount_Bills: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Amount_Bills',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_amount_bills Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Amount_Coins: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Amount_Coins',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_amount_coins Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Amount_Subject_To_VAT: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Amount_Subject_To_VAT',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_amount_subject_to_vat Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Anonymous: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Anonymous',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_anonymous Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Appeal: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Appeal',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_appeal Schema ',
                        default: '',
                        examples: [
                            '18RGNew-F2F',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Authorization_Code: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Authorization_Code',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_authorization_code Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Batch_Number: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Batch_Number',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_batch_number Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Benefits_Include_Notes: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Benefits_Include_Notes',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_benefits_include_notes Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Benefits_Notes: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Benefits_Notes',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_benefits_notes Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Campaign: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Campaign',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_campaign Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_CardholderName: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_CardholderName',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_cardholdername Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Check_Date: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Check_Date',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_check_date Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Check_Number: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Check_Number',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_check_number Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Claim_Number: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Claim_Number',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_claim_number Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Constit_ID: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Constit_ID',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_constit_id Schema ',
                        default: '',
                        examples: [
                            '1163719',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_ConstituentBankId: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_ConstituentBankId',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_constituentbankid Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Constituent_Code: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Constituent_Code',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_constituent_code Schema ',
                        default: '',
                        examples: [
                            'Whales Email List',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Constituent_Name: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Constituent_Name',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_constituent_name Schema ',
                        default: '',
                        examples: [
                            'Glenn Heffernan',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Credit_Card_Number: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Credit_Card_Number',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_credit_card_number Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Credit_Type: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Credit_Type',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_credit_type Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_CurrencyAmount_ForDisplay: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_CurrencyAmount_ForDisplay',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_currencyamount_fordisplay Schema ',
                        default: '',
                        examples: [
                            '$35.00',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_CurrencyReceiptAmount_ForDisplay: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_CurrencyReceiptAmount_ForDisplay',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_currencyreceiptamount_fordisplay Schema ',
                        default: '',
                        examples: [
                            '$35.00',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Currency_Amount: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Currency_Amount',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_currency_amount Schema ',
                        default: '',
                        examples: [
                            '35',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Currency_Country: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Currency_Country',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_currency_country Schema ',
                        default: '',
                        examples: [
                            'Australia',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Currency_Exchange_Rate: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Currency_Exchange_Rate',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_currency_exchange_rate Schema ',
                        default: '',
                        examples: [
                            '1',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Currency_Receipt_Amount: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Currency_Receipt_Amount',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_currency_receipt_amount Schema ',
                        default: '',
                        examples: [
                            '35',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_DateAdded: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_DateAdded',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_dateadded Schema ',
                        default: '',
                        examples: [
                            '21/07/2018 5:30:31 PM',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_DateChanged: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_DateChanged',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_datechanged Schema ',
                        default: '',
                        examples: [
                            '21/07/2018 5:30:31 PM',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Description: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Description',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_description Schema ',
                        default: '',
                        examples: [
                            '20/07/2018 Recurring Gift Pay-Cash $35.00 - Glenn Heffernan',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Drawer: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Drawer',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_drawer Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_EFT_Id: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_EFT_Id',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_eft_id Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Expires_On: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Expires_On',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_expires_on Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Fund: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Fund',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_fund Schema ',
                        default: '',
                        examples: [
                            'A14014000C',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_GLJournalReference: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_GLJournalReference',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_gljournalreference Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_GiftSubType: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_GiftSubType',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_giftsubtype Schema ',
                        default: '',
                        examples: [
                            'Four Week',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Gift_Amount: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Gift_Amount',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_gift_amount Schema ',
                        default: '',
                        examples: [
                            '35',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Gift_Code: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Gift_Code',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_gift_code Schema ',
                        default: '',
                        examples: [
                            'F2F Immediate Debit via IPP',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Gift_Date: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Gift_Date',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_gift_date Schema ',
                        default: '',
                        examples: [
                            '20/07/2018',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_GrossAmount: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_GrossAmount',
                        type: 'integer',
                        title: 'The Recurringgiftactivity_fld_grossamount Schema ',
                        default: 0,
                        examples: [
                            35,
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Id: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Id',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_id Schema ',
                        default: '',
                        examples: [
                            '12555548',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Import_Id: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Import_Id',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_import_id Schema ',
                        default: '',
                        examples: [
                            'F2FID4-APEX5146851',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_LastChangedById: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_LastChangedById',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_lastchangedbyid Schema ',
                        default: '',
                        examples: [
                            '417',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Letter_Code: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Letter_Code',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_letter_code Schema ',
                        default: '',
                        examples: [
                            'FOTRW',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_OrderType: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_OrderType',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_ordertype Schema ',
                        default: '',
                        examples: [
                            'Telephone',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Package: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Package',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_package Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_PaymentID: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_PaymentID',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_paymentid Schema ',
                        default: '',
                        examples: [
                            '14819704',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Payment_Type: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Payment_Type',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_payment_type Schema ',
                        default: '',
                        examples: [
                            'Credit Card',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Post_Date: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Post_Date',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_post_date Schema ',
                        default: '',
                        examples: [
                            '21/07/2018',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Post_Status: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Post_Status',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_post_status Schema ',
                        default: '',
                        examples: [
                            'Not Posted',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_ProcessedByEFT: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_ProcessedByEFT',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_processedbyeft Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Receipt_Amount: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Receipt_Amount',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_receipt_amount Schema ',
                        default: '',
                        examples: [
                            '35',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Receipt_Date: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Receipt_Date',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_receipt_date Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Receipt_Flag: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Receipt_Flag',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_receipt_flag Schema ',
                        default: '',
                        examples: [
                            'Not Receipted',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Receipt_Number: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Receipt_Number',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_receipt_number Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Received: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Received',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_received Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_RecurringGiftId: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_RecurringGiftId',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_recurringgiftid Schema ',
                        default: '',
                        examples: [
                            '14819703',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Reference: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Reference',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_reference Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Reference_Date: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Reference_Date',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_reference_date Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Reference_Number: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Reference_Number',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_reference_number Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_SolicitorNames: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_SolicitorNames',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_solicitornames Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Standing_Order_Sent: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Standing_Order_Sent',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_standing_order_sent Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Standing_Order_Sent_Date: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Standing_Order_Sent_Date',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_standing_order_sent_date Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_TaxCanBeClaimed: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_TaxCanBeClaimed',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_taxcanbeclaimed Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_TaxClaimAmount: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_TaxClaimAmount',
                        type: 'integer',
                        title: 'The Recurringgiftactivity_fld_taxclaimamount Schema ',
                        default: 0,
                        examples: [
                            0,
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_Type: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_Type',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_type Schema ',
                        default: '',
                        examples: [
                            'Recurring Gift Pay-Cash',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_UserGiftId: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_UserGiftId',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_usergiftid Schema ',
                        default: '',
                        examples: [
                            'F2FID4-APEX5146851',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_VAT_Amount_Charged: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_VAT_Amount_Charged',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_vat_amount_charged Schema ',
                        default: '',
                        examples: [
                            '0',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_VAT_Tax_Code: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_VAT_Tax_Code',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_vat_tax_code Schema ',
                        default: '',
                        examples: [
                            '',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_VInstallmentAmount: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_VInstallmentAmount',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_vinstallmentamount Schema ',
                        default: '',
                        examples: [
                            '35',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_VInstallmentDate: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_VInstallmentDate',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_vinstallmentdate Schema ',
                        default: '',
                        examples: [
                            '20/07/2018',
                        ],
                    },
                    RECURRINGGIFTACTIVITY_fld_VInstallmentNumber: {
                        $id: '/properties/recurring_gift_activities/items/properties/RECURRINGGIFTACTIVITY_fld_VInstallmentNumber',
                        type: 'string',
                        title: 'The Recurringgiftactivity_fld_vinstallmentnumber Schema ',
                        default: '',
                        examples: [
                            '1',
                        ],
                    },
                },
            },
        },
    },
};
