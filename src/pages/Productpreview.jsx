import { useParams } from "react-router";
import { ProductData } from "../assets/contextapi/ContextApp";
import { ProfileImage } from "../assets/Profileiamge";
import { NavLink } from "react-router";
import Ratingstar from "../components/card/Ratingstar";
import { useContext, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Productreating from "../components/common/reating/Productreating";
import { FaRegHeart } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { LuBadgeCheck } from "react-icons/lu";

const Productpreview = ({ addToCart }) => {
  const { ProductsData } = useContext(ProductData);
  const { id } = useParams();
  const ProductInfo = ProductsData.find((p) => p.id === parseInt(id));
  const [PrevewImage, SetPrevewImage] = useState(ProductInfo.filePath);

  // Starting Add to cart button
  const [AddToCardCss, SetAddToCardCss] = useState(null);
  const AddToCartClick = () => {
    addToCart(ProductInfo);
    SetAddToCardCss("ActiveInCart");
  };
  // Clossing add to cart button function
  return (
    <div className="bg-white">
      <div className="PageRatio">
        <div className="px-6 sm:px-6 md:px-0 TopNavigation flex flex-col sm:flex-col md:flex-row items-start  justify-start gap-2 sm:gap-3 md:gap-6 mt-10">
          <NavLink
            className="uppercase pr-2 flex items-center justify-start"
            to="/home"
          >
            Home <FaAngleRight className=" mt-[-2px]" />
          </NavLink>
          <NavLink
            className="uppercase pr-2 flex items-center"
            to="/allproducts"
          >
            Products <FaAngleRight className=" mt-[-2px]" />
          </NavLink>
          <div className="">{ProductInfo.name}</div>
        </div>
        {/* Top Navigation type product informatin section */}

        <div className="Content flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20 mt-10">
          <div className="ColorImage px-6 sm:px-6 md:px-0 w-full sm:w-full md:w-full lg:w-1/12 flex flex-row sm:flex-row md:flex-row lg:flex-col gap-4 ">
            {ProductInfo.imageSources &&
              ProductInfo.imageSources.map((Imageitems, index) => {
                return (
                  <div
                    onClick={() => SetPrevewImage(Imageitems.ExtImage)}
                    key={index}
                    className="bg-slate-200 overflow-hidden duration-300 rounded-md border w-20 sm:w-20 lg:w-full "
                  >
                    <img
                      className=" aspect-square hover:scale-[1.1] duration-300"
                      src={Imageitems.ExtImage}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                );
              })}
          </div>
          {/* Left All Immage Section */}

          <div className="w-full md:w-full lg:w-11/12 px-6 sm:px-6 md:px-0 ">
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-14 xl:gap-16 2xl:gap-20  ">
              <div className="overflow-hidden aspect-square w-full sm:w-full md:w-full lg:w-6/12 block bg-slate-200 rounded-lg duration-300 border">
                <img
                  className=" aspect-square w-full  hover:scale-[1.1] duration-300"
                  src={PrevewImage}
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="Discribe w-full md:w-full lg:w-6/12">
                <div className="Saler flex gap-2 mt-3">
                  <span className=" ">
                    <LuBadgeCheck className="text-xl" />
                  </span>
                  {ProductInfo.author}
                </div>
                <h3 className="mt-10">{ProductInfo.name}</h3>
                <div className="Rating mt-4 flex items-center justify-start gap-1">
                  <Ratingstar className="block" rating={ProductInfo.rating} />
                  <span className=" ml-6 text-2xl font-medium">
                    {ProductInfo.rating}
                  </span>
                  <span className="ml-3">{`${ProductInfo.ratingcount} Peoples`}</span>
                </div>
                <h2 className="Price mt-6 font-semibold">
                  {ProductInfo.price} <span className=" font-medium">$</span>{" "}
                  <del className=" text-xl mr-3 text-[#777]">
                    {ProductInfo.startingprice}
                  </del>
                  <span className="font-normal text-sm">Price</span>
                </h2>
                <div className="mt-3 flex justify-start items-center gap-3">
                  <div className=" uppercase">Color</div>
                  <i className="fa-solid fa-angle-right text-sm"></i>
                  {ProductInfo.colors.map((Color, index) => (
                    <div key={index}>{Color}</div>
                  ))}
                </div>
                <p className="w-full md:w-full 2xl:w-4/5 mt-10 leading-7">
                  {ProductInfo.summaries}
                </p>

                <div className="flex mt-6 gap-4">
                  <button
                    onClick={AddToCartClick}
                    className={`${AddToCardCss} border px-6 h-12 border-slate-600 rounded-sm text-black font-medium `}
                  >
                    Add To Cart
                  </button>

                  <button
                    className={` border px-6 h-12 border-slate-600 rounded-sm text-black font-medium`}
                  >
                    <FaRegHeart />
                  </button>
                </div>
                <div className=" mt-10 uppercase font-medium flex justify-start items-center gap-10">
                  Shear on :
                  <div className="Icon flex gap-4 font-medium text-xl">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Top Area With iamge and main Details section */}

            <div className="Bootom mt-10 flex flex-col-reverse lg:flex-row justify-between items-start gap-5 lg:gap-20">
              <div className="DiscribeText w-full lg:w-4/6 ">
                <div className="Top hidden lg:flex justify-start items-center gap-10 border-b-[1px] pb-4">
                  <button className="text-xl uppercase font-bold">
                    Description{" "}
                  </button>
                  <button className="Deactive text-xl uppercase font-bold">
                    Reviews{" "}
                    <span>{`${ProductInfo.productReviews.length}`}</span>
                  </button>
                </div>
                {/* Title bar */}
                <div className="Texts ">
                  <p className="w-full lg:w-5/6 mt-2 lg:mt-12 text-[13px] lg:text-base leading-6 lg:leading-7">
                    {ProductInfo.description}
                  </p>
                  <div className="mt-10 lg:mt-16">
                    <div className=" uppercase">Product Detels</div>
                    <ul className="mt-5">
                      {ProductInfo.benefits &&
                        ProductInfo.benefits.map((ProudInfo, index) => (
                          <li key={index} className="list-disc ml-5 mt-3">
                            {ProudInfo}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {/* Product Describe */}

                <div className="Review mt-12">
                  {ProductInfo.productReviews &&
                    ProductInfo.productReviews.map((ProductData, index) => {
                      const User = ProductData.Userid;
                      const UserData = ProfileImage.find(
                        (UID) => UID.UID === User
                      );
                      return (
                        <div className="Reviews mt-10 mb-20" key={index}>
                          <div className="  rounded-lg" key={index}>
                            <div className="User flex justify-start items-start gap-8 mt-8">
                              <div className="profile w-[52px] h-[50px]  rounded-full border ">
                                {UserData && (
                                  <img
                                    className="h-full bg-slate-900 w-full rounded-full "
                                    src={UserData.ProfileImg}
                                    alt=""
                                    loading="lazy"
                                  />
                                )}
                              </div>

                              <div className="    w-[calc(100%_-50px)]">
                                <div className=" font-medium">
                                  {ProductData.Name}
                                  <span className="ml-3 font-normal text-[13px] text-[#bbb]">
                                    {ProductData.date}
                                  </span>
                                </div>
                                <div className="mt-1">
                                  <Productreating rating={ProductData.rating} />
                                </div>
                                <p className="  w-full mt-3  pb-4">
                                  {ProductData.ReviewText}
                                </p>

                                <div className="flex mt-0 flex-col justify-start items-start ">
                                  <div className="react  flex gap-4 text-xl">
                                    <button>
                                      <FaRegHeart />
                                    </button>

                                    <button>
                                      <FiMessageCircle />
                                    </button>
                                    <button className="text-sm text-[#666]">
                                      Reply
                                    </button>
                                  </div>
                                  <div className="Reply mt-4 flex flex-col gap-2  w-full lg:w-5/6">
                                    {ProductData.comments &&
                                      ProductData.comments.map(
                                        (ConnentsData, index) => {
                                          return (
                                            <div className="" key={index}>
                                              <div className="flex justify-start items-start gap-2 ">
                                                <span className=" mt-[2px]  ">
                                                  <LuBadgeCheck />
                                                </span>
                                                <span className="block w-5/6 text-sm">
                                                  {ConnentsData.RplyText}
                                                </span>
                                              </div>
                                            </div>
                                          );
                                        }
                                      )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Clossing All Revews Section  */}
                        </div>
                      );
                    })}
                </div>
                {/* Revew Content  */}
              </div>
              <div className="Aditional w-full lg:w-2/6">
                <div className=" uppercase font-medium ">
                  Additional Information{" "}
                </div>
                <div className="mt-4 lg:mt-10">
                  Sales Count : {ProductInfo.sellcount}
                </div>
                <div className="mt-2">Offer : {ProductInfo.offer}</div>
                <div className="mt-2">Size : {ProductInfo.size}</div>
                <div>
                  <img
                    loading="lazy"
                    className=" bg-white w-3/5 mt-4 mix-blend-multiply"
                    src={ProductInfo.semple}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Bottom Product Information */}
          </div>
          {/* Product Main Area  */}
        </div>
        {/* Body Product Information Section */}
      </div>
    </div>
  );
};

export default Productpreview;
