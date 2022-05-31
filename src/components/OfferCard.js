import React, {  useState } from "react";
import HelpOutlineOutlined from "@material-ui/icons/HelpOutlineOutlined";
import { Button } from "@material-ui/core";
import BasicPopover from "./PopupComp";


// OFFER CARDS HERE

const OfferCard = ({ offer }) => {
  // API ENDPOINTS
  const {
    ImagePath,
    ProductDesc,
    FirmName,
    Cash,
    QuotaInfo: { HasDiscount, PremiumWithDiscount },
    SaleClosed,
    popoverContent,
  } = offer;

  // FUNCTIONS (PRICE NUMBER FORMAT AND POPUP )

  const numberFormat = (number) => {
    const num = String(number.toFixed(2)).replace(".", ",").split("").reverse();
    return num.map((e, i) => (i === 6 ? (e = e + ".") : e)).reverse();
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const content =
    popoverContent && Object.values(popoverContent)[0].Description;

  const mouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const mouseLeave = () => {
    setAnchorEl(null);
  }; 

  const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={ImagePath} alt="isnt't uploaded" />
          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <h5>{ProductDesc}</h5>
            <h5>
              {FirmName}
              {popoverContent && (
                <HelpOutlineOutlined fontSize="small" color="primary" />
              )}
              {popoverContent && (
                <BasicPopover
                  mouseLeave={mouseLeave}
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  content={content}
                />
              )}
            </h5>
          </div> 
          <div>
            {HasDiscount && (
              <h5>
                Peşin <span>{numberFormat(Cash)} TL</span>
              </h5>
            )}

            <h3>
              {HasDiscount
                ? numberFormat(PremiumWithDiscount)
                : numberFormat(Cash)}{" "}
              TL
            </h3>
            <Button
              variant={SaleClosed ? "outlined" : "contained"}
              color="primary"
            >
              {SaleClosed ? "TELEFONDA SATIN AL" : "SATIN AL"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
