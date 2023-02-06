import Script from "next/script"
import { useRef } from "react"

export default function MailingList(props) {
    const img = useRef();
    const form = useRef();
    const submit = useRef();

    const zcScptlessSubmit = () => {
        console.debug(submit.current);
        form.current.removeChild(submit.current);
        form.current.submit();
    }

    return (
        <div>
            {/*Zoho Campaigns Web-Optin Form Starts Here*/}
            <div id="customForm">
                <div name="SIGNUP_BODY" changeitem="BG_IMAGE">
                    <div changeitem="ELEGANTFORM_IMAGE">
                        <img src="https://campaign-image.com/zohocampaigns/1301d85c_sign_form_bg_16.png" />
                    </div>
                    <div>
                        <div id="errorMsgDiv">Please correct the marked field(s) below.</div>
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
                        <form method="POST" ref={form} id="zcampaignOptinForm" action="https://zcvf-zcglf.maillist-manage.com/weboptin.zc" target="_zcSignup" onSubmit={zcScptlessSubmit}>
                            <div>
                                <div>Help us transform education</div>
                                <div>
                                    <input type="text" placeholder="Name" changeitem="SIGNUP_FORM_FIELD" name="FIRSTNAME" id="FIRSTNAME" />
                                </div>
                                <div>
                                    <input placeholder="Email Address" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" type="text" />
                                </div>
                                <div>
                                    <input type="submit" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" defaultValue="Sign Up" />
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
                            <input type="hidden" id="scriptless" name="scriptless" defaultValue="yes" />
                            <input type="hidden" id="zc_spmSubmit" ref={submit} name="zc_spmSubmit" defaultValue="ZCSPMSUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
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