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

    const referenceSetter = e => {

    }

    const runOnFormSubmit_sf3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0 = (th) => {
        /*Before submit, if you want to trigger your event, "include your code here"*/
    };

    return <div dangerouslySetInnerHTML={{
        __html: `<!--Zoho Campaigns Web-Optin Form's Header Code Starts Here-->

<script type="text/javascript" src="https://zcvf-zcglf.maillist-manage.com/js/optin.min.js" onload="setupSF('sf3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0','ZCFORMVIEW',false,'light',false,'0')"></script>
<script type="text/javascript">
	function runOnFormSubmit_sf3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0(th){
		/*Before submit, if you want to trigger your event, "include your code here"*/
	};
</script>



<!--Zoho Campaigns Web-Optin Form's Header Code Ends Here--><!--Zoho Campaigns Web-Optin Form Starts Here-->

<div id="sf3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0" data-type="signupform" style="opacity: 1;">
	<div id="customForm">
		<div name="SIGNUP_BODY" changeitem="BG_IMAGE" style="text-align: center; width: 250px; height: 340px; position: relative; z-index: 2; background-color: rgb(255, 255, 255); margin: auto; overflow: hidden">
			<div changeitem="ELEGANTFORM_IMAGE" style="width: 100%; height: 100%; position: absolute; bottom: 0">
				<img src="https://campaign-image.com/zohocampaigns/1301d85c_sign_form_bg_16.png" style="width: 100%; height: 100%; position: relative">
			</div>
			<div style="width: 250px; height: 340px; position: relative; font-family: &quot;Arial&quot;; margin: auto">
				<div style="background-color: rgb(255, 235, 232); padding: 10px; color: rgb(210, 0, 0); font-size: 11px; margin: 20px 10px 0px; border: 1px solid rgb(255, 217, 211); opacity: 1; display: block; position: absolute; box-shadow: 0px 5px 12px 0px rgb(27, 27, 27); display: none" id="errorMsgDiv">Please correct the marked field(s) below.</div>
				<div style="position:relative;">
					<div id="Zc_SignupSuccess" style="display:none;position:absolute;margin-left:4%;width:90%;background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154);  margin-top: 10px;margin-bottom:10px;word-break:break-all">
						<table width="100%" cellspacing="0" cellpadding="0" border="0">
							<tbody>
								<tr>
									<td width="10%">
										<img class="successicon" src="https://zcvf-zcglf.maillist-manage.com/images/challangeiconenable.jpg" align="absmiddle">
									</td>
									<td>
										<span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px;word-break:break-word">&nbsp;&nbsp;Thank you for Signing Up</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<form method="POST" id="zcampaignOptinForm" style="margin: 0px; width: 100%; color: rgb(255, 255, 255)" action="https://zcvf-zcglf.maillist-manage.com/weboptin.zc" target="_zcSignup">
					<div style="text-align: center; width: 100%; float: left; position: absolute; z-index: 2; bottom: 40px">
						<div style="font-size: 18px; font-family: &quot;Arial&quot;; font-weight: normal; color: rgb(0, 0, 0); line-height: 1.556; text-align: center; margin: 0px 0 10px; width: 100%; float: left">Help us transform education</div>
						<div style="position: relative; width: 190px; height: 28px; margin-bottom: 20px; display: inline-block">
							<input type="text" style="border-width: 0px 0px 1px; border-style: solid; width: 100%; height: 100%; z-index: 4; outline: none; padding: 5px; box-sizing: border-box; color: rgb(0, 0, 0); font-family: &quot;Arial&quot;; background-color: transparent; border-color: rgb(0, 0, 0)" placeholder="Name" changeitem="SIGNUP_FORM_FIELD" name="FIRSTNAME" id="FIRSTNAME">
						</div>
						<div style="text-align: center; width: 190px; height: 28px; margin: auto; margin-bottom: 20px">
							<div id="Zc_SignupSuccess" style="position: absolute; width: 87%; background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154); margin-bottom: 10px; word-break: break-all; opacity: 1; display: none">
								<div style="width: 20px; padding: 5px; display: table-cell">
									<img class="successicon" src="https://campaigns.zoho.com/images/challangeiconenable.jpg" style="width: 20px">
								</div>
								<div style="display: table-cell">
									<span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px; line-height: 30px; display: block"></span>
								</div>
							</div>
							<input placeholder="Email Address" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" type="text" style="border-width: 0px 0px 1px; border-color: rgb(99, 99, 99); border-style: solid; width: 100%; height: 100%; z-index: 4; outline: none; padding: 5px; box-sizing: border-box; color: rgb(0, 0, 0); font-family: &quot;Arial&quot;; background-color: transparent">
						</div>
						<div style="position: relative; width: 113px; height: 30px; display: inline-block">
							<input type="button" style="text-align: center; border-radius: 6px; background-color: rgb(28, 195, 161); width: 100%; height: 100%; z-index: 5; border: 0px none; color: rgb(255, 255, 255); cursor: pointer; outline: none; font-family: &quot;Arial&quot;; font-size: 14px" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Sign Up">
						</div>
					</div>
					<input type="hidden" id="fieldBorder" value="">
					<input type="hidden" id="submitType" name="submitType" value="optinCustomView">
					<input type="hidden" id="emailReportId" name="emailReportId" value="">
					<input type="hidden" id="formType" name="formType" value="QuickForm">
					<input type="hidden" name="zx" id="cmpZuid" value="12dc55e5a">
					<input type="hidden" name="zcvers" value="3.0">
					<input type="hidden" name="oldListIds" id="allCheckedListIds" value="">
					<input type="hidden" id="mode" name="mode" value="OptinCreateView">
					<input type="hidden" id="zcld" name="zcld" value="1eb86c7dd8388100">
					<input type="hidden" id="zctd" name="zctd" value="1eb86c7dd8387fc9">
					<input type="hidden" id="document_domain" value="">
					<input type="hidden" id="zc_Url" value="zcvf-zcglf.maillist-manage.com">
					<input type="hidden" id="new_optin_response_in" value="2">
					<input type="hidden" id="duplicate_optin_response_in" value="2">
					<input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW">
					<input type="hidden" id="zc_formIx" name="zc_formIx" value="3z2875ecba7322a422a4fc9493664cb71e409267ad9331723e910dc21548df54c0">
					<input type="hidden" id="viewFrom" value="URL_ACTION">
					<span style="display: none" id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
					<span style="display: none" id="dt_FIRSTNAME">1,false,1,First Name,2</span>
					<span style="display: none" id="dt_LASTNAME">1,false,1,Last Name,2</span>
				</form>
			</div>
		</div>
	</div>
	<img src="https://zcvf-zcglf.maillist-manage.com/images/spacer.gif" id="refImage" onload="referenceSetter(this)" style="display:none;">
</div>
<input type="hidden" id="signupFormType" value="QuickForm_Vertical">
<div id="zcOptinOverLay" oncontextmenu="return false" style="display:none;text-align: center; background-color: rgb(0, 0, 0); opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px;"></div>
<div id="zcOptinSuccessPopup" style="display:none;z-index: 9999;width: 800px; height: 40%;top: 84px;position: fixed; left: 26%;background-color: #FFFFFF;border-color: #E6E6E6; border-style: solid; border-width: 1px;  box-shadow: 0 1px 10px #424242;padding: 35px;">
	<span style="position: absolute;top: -16px;right:-14px;z-index:99999;cursor: pointer;" id="closeSuccess">
		<img src="https://zcvf-zcglf.maillist-manage.com/images/videoclose.png">
	</span>
	<div id="zcOptinSuccessPanel"></div>
</div>

<!--Zoho Campaigns Web-Optin Form Ends Here-->`
    }}></div>
}