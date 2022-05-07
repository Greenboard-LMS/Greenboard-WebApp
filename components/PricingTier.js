import { Col } from "reactstrap";
import { currency, generic_content, generic_feature_list, generic_head_content, generic_head_price, generic_price_btn, generic_price_tag, head, head_bg, month, price, sign } from "./pricing.module.css";

export default function PricingTier({ tier, planPrice, features }) {
    return (
        <Col md="4">
            <div className={`${generic_content} clearfix`}>
                <div className={`${generic_head_price} clearfix`}>
                    <div className={`${generic_head_content} clearfix`}>
                        <div className={head_bg}></div>
                        <div className={head}>
                            <span>{tier}</span>
                        </div>
                    </div>
                    <div className={`${generic_price_tag} clearfix`}>
                        <span className={price}>
                            <span className={sign}>$</span>
                            <span className={currency}>{planPrice}</span>
                            <span className={month}>/year</span>
                        </span>
                    </div>

                    <div className={`${generic_price_btn} clearfix`}>
                        <a className="" href="">Sign up</a>
                    </div>

                </div>
                <div className={generic_feature_list}>
                    <ul>
                        {features.map(item => <li><span>{item}</span></li>)}
                    </ul>
                </div>
            </div>
        </Col>
    );
}