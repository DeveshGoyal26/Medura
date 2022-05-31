import React from "react";
import { Aboutus_div } from "./Medora.styled";
import Routes_file from "./Routes_file";

const Aboutus = () => {
  return (
    <>
      <Aboutus_div>
        <Routes_file />
        <div className="et_pb_row et_pb_row_11">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h3>Different by Design</h3>
                <p>
                  We find the best independent designers and makers around the
                  world to create your pieces. Producing designs in small
                  batches keeps costs low - and we think it’s a more responsible
                  way of working. From potters in Portugal to needle-workers in
                  Nottingham, discover how your items get made.
                </p>
              </div>
            </div>
            <div
              style={{ marginTop: "30px" }}
              className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module "
            >
              <a
                className="et_pb_button et_pb_button_0 et_hover_enabled et_pb_bg_layout_light"
                href=""
              >
                SEE HOW IT IS MADE
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>About us</h3>
            <p>
              Dignissim cras tincidunt lobortis feugiat. Id diam vel quam
              elementum pulvinar. Egestas fringilla phasellus faucibus
              scelerisque eleifend donec pretium vulputate. Mauris in aliquam
              sem fringilla ut morbi tincidunt augue. Neque egestas congue
              quisque egestas diam. Libero volutpat sed cras ornare arcu.
              Tristique senectus et netus et malesuada fames ac. Consectetur a
              erat nam at lectus urna. Vel turpis nunc eget lorem dolor sed
              viverra. In hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div>
            <img
              src="https://bodycommerce-furniture.diviengine.com/wp-content/uploads/2019/09/green-chair.jpg"
              alt=""
            />
          </div>
        </div>
      </Aboutus_div>
    </>
  );
};

export default Aboutus;
