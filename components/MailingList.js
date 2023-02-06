import Script from "next/script"

export default function MailingList(props) {
    return (
        <div>
            {/*Zoho Campaigns Web-Optin Form's Header Code Starts Here*/}
            <Script src="https://zcvf-zcglf.maillist-manage.com/js/optin.min.js" onLoad={() => {
                setupSF('sf3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0', 'ZCFORMVIEW', false, 'light', false, '0')
            }} />
            <Script onLoad={() => {
                function runOnFormSubmit_sf3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0(th) {
                    /*Before submit, if you want to trigger your event, "include your code here"*/
                }
            }} />
            {/*Zoho Campaigns Web-Optin Form's Header Code Ends Here*/}{/*Zoho Campaigns Web-Optin Form Starts Here*/}
            <div id="sf3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0" data-type="signupform" style={{ opacity: 1 }}>
                <div id="customForm">
                    <div name="SIGNUP_BODY" changeitem="BG_IMAGE" style={{ textAlign: 'center', width: '250px', height: '340px', position: 'relative', zIndex: 2, backgroundColor: 'rgb(255, 255, 255)', margin: 'auto', overflow: 'hidden' }}>
                        <div changeitem="ELEGANTFORM_IMAGE" style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0 }}>
                            <img src="https://campaign-image.com/zohocampaigns/1301d85c_sign_form_bg_16.png" style={{ width: '100%', height: '100%', position: 'relative' }} />
                        </div>
                        <div style={{ width: '250px', height: '340px', position: 'relative', fontFamily: '"Arial"', margin: 'auto' }}>
                            <div style={{ backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', margin: '20px 10px 0px', border: '1px solid rgb(255, 217, 211)', opacity: 1, display: 'none', position: 'absolute', boxShadow: '0px 5px 12px 0px rgb(27, 27, 27)' }} id="errorMsgDiv">Please correct the marked field(s) below.</div>
                            <div style={{ position: 'relative' }}>
                                <div id="Zc_SignupSuccess" style={{ display: 'none', position: 'absolute', marginLeft: '4%', width: '90%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginTop: '10px', marginBottom: '10px', wordBreak: 'break-all' }}>
                                    <table width="100%" cellSpacing={0} cellPadding={0} border={0}>
                                        <tbody>
                                            <tr>
                                                <td width="10%">
                                                    <img className="successicon" src="https://zcvf-zcglf.maillist-manage.com/images/challangeiconenable.jpg" align="absmiddle" />
                                                </td>
                                                <td>
                                                    <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>&nbsp;&nbsp;Thank you for Signing Up</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <form method="POST" id="zcampaignOptinForm" style={{ margin: '0px', width: '100%', color: 'rgb(255, 255, 255)' }} action="https://zcvf-zcglf.maillist-manage.com/weboptin.zc" target="_zcSignup">
                                <div style={{ textAlign: 'center', width: '100%', float: 'left', position: 'absolute', zIndex: 2, bottom: '40px' }}>
                                    <div style={{ fontSize: '18px', fontFamily: '"Arial"', fontWeight: 'normal', color: 'rgb(0, 0, 0)', lineHeight: '1.556', textAlign: 'center', margin: '0px 0 10px', width: '100%', float: 'left' }}>Help us transform education</div>
                                    <div style={{ position: 'relative', width: '190px', height: '28px', marginBottom: '20px', display: 'inline-block' }}>
                                        <input type="text" style={{ borderWidth: '0 0 1px', borderColor: 'rgb(99, 99, 99)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 5px', boxSizing: 'border-box', color: 'rgb(51, 51, 51)', fontFamily: '"Arial"', backgroundColor: 'transparent' }} placeholder="First Name" changeitem="SIGNUP_FORM_FIELD" name="FIRSTNAME" id="FIRSTNAME" />
                                    </div>
                                    <div style={{ textAlign: 'center', width: '190px', height: '28px', margin: 'auto', marginBottom: '20px' }}>
                                        <div id="Zc_SignupSuccess" style={{ position: 'absolute', width: '87%', backgroundColor: 'white', padding: '3px', border: '3px solid rgb(194, 225, 154)', marginBottom: '10px', wordBreak: 'break-all', opacity: 1, display: 'none' }}>
                                            <div style={{ width: '20px', padding: '5px', display: 'table-cell' }}>
                                                <img className="successicon" src="https://campaigns.zoho.com/images/challangeiconenable.jpg" style={{ width: '20px' }} />
                                            </div>
                                            <div style={{ display: 'table-cell' }}>
                                                <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', lineHeight: '30px', display: 'block' }} />
                                            </div>
                                        </div>
                                        <input placeholder="Email Address" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" type="text" style={{ borderWidth: '0 0 1px', borderColor: 'rgb(99, 99, 99)', borderStyle: 'solid', width: '100%', height: '100%', zIndex: 4, outline: 'none', padding: '5px 5px', boxSizing: 'border-box', color: 'rgb(136, 136, 136)', fontFamily: '"Arial"', backgroundColor: 'transparent' }} />
                                    </div>
                                    <div style={{ position: 'relative', width: '113px', height: '30px', display: 'inline-block' }}>
                                        <input type="button" style={{ textAlign: 'center', borderRadius: '6px', backgroundColor: 'rgb(209, 107, 166)', width: '100%', height: '100%', zIndex: 5, border: 0, color: 'rgb(255, 255, 255)', cursor: 'pointer', outline: 'none', fontFamily: '"Arial"', fontSize: '14px' }} name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" defaultValue="Sign Up" />
                                    </div>
                                </div>
                                <input type="hidden" id="fieldBorder" defaultValue />
                                <input type="hidden" id="submitType" name="submitType" defaultValue="optinCustomView" />
                                <input type="hidden" id="emailReportId" name="emailReportId" defaultValue />
                                <input type="hidden" id="formType" name="formType" defaultValue="QuickForm" />
                                <input type="hidden" name="zx" id="cmpZuid" defaultValue="12dc55e5a" />
                                <input type="hidden" name="zcvers" defaultValue={3.0} />
                                <input type="hidden" name="oldListIds" id="allCheckedListIds" defaultValue />
                                <input type="hidden" id="mode" name="mode" defaultValue="OptinCreateView" />
                                <input type="hidden" id="zcld" name="zcld" defaultValue />
                                <input type="hidden" id="zctd" name="zctd" defaultValue />
                                <input type="hidden" id="document_domain" defaultValue />
                                <input type="hidden" id="zc_Url" defaultValue="zcvf-zcglf.maillist-manage.com" />
                                <input type="hidden" id="new_optin_response_in" defaultValue={0} />
                                <input type="hidden" id="duplicate_optin_response_in" defaultValue={0} />
                                <input type="hidden" name="zc_trackCode" id="zc_trackCode" defaultValue="ZCFORMVIEW" />
                                <input type="hidden" id="zc_formIx" name="zc_formIx" defaultValue="3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0" />
                                <input type="hidden" id="viewFrom" defaultValue="URL_ACTION" />
                                <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                                <span style={{ display: 'none' }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                                <span style={{ display: 'none' }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
                            </form>
                        </div>
                    </div>
                </div>
                <img src="https://zcvf-zcglf.maillist-manage.com/images/spacer.gif" id="refImage" onLoad={() => { referenceSetter(this) }} style={{ display: 'none' }} />
            </div>
            <input type="hidden" id="signupFormType" defaultValue="QuickForm_Vertical" />
            <div id="zcOptinOverLay" onContextMenu={() => false} style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: '0.5', zIndex: 100, position: 'fixed', width: '100%', top: '0px', left: '0px', height: '988px' }} />
            <div id="zcOptinSuccessPopup" style={{ display: 'none', zIndex: 9999, width: '800px', height: '40%', top: '84px', position: 'fixed', left: '26%', backgroundColor: '#FFFFFF', borderColor: '#E6E6E6', borderStyle: 'solid', borderWidth: '1px', boxShadow: '0 1px 10px #424242', padding: '35px' }}>
                <span style={{ position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer' }} id="closeSuccess">
                    <img src="https://zcvf-zcglf.maillist-manage.com/images/videoclose.png" />
                </span>
                <div id="zcOptinSuccessPanel" />
            </div>
            {/*Zoho Campaigns Web-Optin Form Ends Here*/}
        </div>

    )
}