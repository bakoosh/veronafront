import React, {useContext} from 'react';
import {CatalogContext} from "../../contexts/CatalogContext";

const Basket = () => {
    const {isOpenCatalog,setIsOpenCatalog} = useContext(CatalogContext);
    return (
        <div className={"w-full h-[500px] flex items-center justify-center"}>
            <div className={"w-2/3 flex items-center h-2/3"}>
                <div className={"w-1/2 h-full flex items-center justify-center"}>
                    <div>
                        <div className={"w-full flex items-center justify-center"}>
                            <span className={"text-gray-500 text-2xl"}>В вашей корзине пусто</span>
                        </div>

                        <div className={"w-full flex items-center justify-center mt-3"}>
                            <span className={"text-gray-500 text-md"}>Добавьте украшение мечты</span>
                        </div>

                        <div className={"w-full flex items-center justify-center mt-3"}>
                            <button
                                onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                                className={"px-3 py-1 border-2 border-black text-gray-600 font-bold text-xl rounded-xl"}>Перейти
                                в каталог
                            </button>
                        </div>
                    </div>
                </div>

                <div className={"w-1/2 h-2/3 mt-3.5 flex items-center justify-center"}>
                    <svg className={"w-64 h-64 relative -top-10"} width="271.124mm" height="271.124mm" version="1.1" style={{
                        shapeRendering: 'geometricPrecision',
                        textRendering: 'geometricPrecision',
                        imageRendering: 'optimizeQuality',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }} viewBox="0 0 59357.79 59357.79">
                        <defs>
                            <font id="FontID0" horizAdvX="587" fontVariant="normal" style={{fillRule: 'nonzero'}}
                                  fontStyle="normal" fontWeight="400">
                                <font-face fontFamily="EngraversGothic BT">
                                    <font-face-src>
                                        <font-face-name name="EngraversGothic BT"/>
                                    </font-face-src>
                                </font-face>
                                <missing-glyph>
                                    <path d="M0 0z"/>
                                </missing-glyph>
                                <glyph unicode="A" horizAdvX="587"
                                       d="M173.834 207.999l237.334 0 -119.167 238.667 -118.167 -238.667zm-173.834 -207.999l264.168 538.998 55.6671 0 267.167 -538.998 -72.8337 0 -73.1669 145.001 -297.835 0 -71.3321 -145.001 -71.8341 0z"/>
                                <glyph unicode="L" horizAdvX="499"
                                       d="M80.9994 0l0 538.998 67.0005 0 0 -477 352 0 0 -61.998 -419.001 0z"/>
                                <glyph unicode="M" horizAdvX="714"
                                       d="M78.0006 0l0 538.998 61.998 0 218.004 -330 218.999 330 60.9984 0 0 -538.998 -66.0008 0 0 420.835 -213.996 -318.835 -214.001 318.835 0 -420.835 -66.0008 0z"/>
                                <glyph unicode="R" horizAdvX="597"
                                       d="M145.001 298.999l238 0c33.8313,0 59.4968,7.49931 76.8322,22.5023 17.4998,14.8342 26.1675,36.8345 26.1675,65.8321 0,28.1668 -8.66769,50.3358 -26.1675,66.0008 -17.3354,15.8338 -41.8325,23.6663 -73.5001,23.6663l-241.332 0 0 -178.001zm-67.0005 -298.999l0 538.998 309.332 0c52.6682,0 93.8344,-13.3326 123.832,-39.8333 29.8371,-26.4964 44.8357,-63.1664 44.8357,-109.997 0,-39.0025 -11.6666,-72.3361 -34.9997,-100.17 -23.5019,-27.8336 -54.3343,-45.1646 -92.666,-51.9975l134.667 -237.001 -74.0021 0 -134.832 236.001 -209.167 0 0 -236.001 -67.0005 0z"/>
                                <glyph unicode="Y" horizAdvX="454"
                                       d="M193 0l0 270.001 -242.998 268.997 84.1671 0 192.996 -212.832 191.836 212.832 84.9979 0 -243.998 -269.997 0 -269.001 -67.0005 0z"/>
                            </font>
                            <style type="text/css">
                                {`
          @font-face { font-family: "EngraversGothic BT"; font-variant: normal; font-style: normal; font-weight: normal; src: url("#FontID0") format(svg) }
          .fil0 { fill: #373334 }
          .fil1 { fill: white }
          .fnt0 { font-weight: normal; font-size: 5059.26px; font-family: 'EngraversGothic BT' }
        `}
                            </style>
                        </defs>
                        <g id="Слой_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer"/>
                            <path className="fil0"
                                  d="M31301.95 12636.74c0,-1527.07 263.46,-2620.46 694.06,-3711.4 561.56,-1422.62 1708.77,-2883.49 2966.73,-3757.42 2608.95,-1812.36 5752.22,-2211.98 8742.88,-877.17 3062.73,1366.92 5102.28,4441.26 5102.28,8346l0 4753.23 -17505.94 0 0 -4753.23zm7815.7 -12636.74l1913.75 0c5296.16,419.82 10107.42,4310.4 11123.81,10216.84 334.81,1945.82 130.68,4975.65 130.68,7173.14l7071.9 0 0 41967.82 -30252.59 0 0 -12602.06c0,-88.4 -8.95,-174.71 -26.01,-258.08l2222.75 0c708.99,0 1283.73,-574.74 1283.73,-1283.71l0 -6956c0,-708.97 -574.74,-1283.71 -1283.73,-1283.71l-10482.14 0 2.26 -913.03 2016.8 0c1765.47,0 3348.65,-752.45 4488.06,-1997.84 1102.67,-1205.24 1778.3,-2865.05 1778.3,-4732.24 0,-1737.53 -743.84,-3341.67 -2006.88,-4497.19 -1189.11,-1087.94 -2829.5,-1769.21 -4723.22,-1769.21 -518.56,0 -1029.29,73.36 -1521.6,209.54l14.45 -5884.28 6956 0c0,-5362.5 -676.85,-8022.72 2385.62,-12453.82 667.11,-965.25 1895.16,-2070.24 2831.67,-2733.13l2400.24 -1309.61c1203.25,-502.69 2442.12,-794.64 3676.15,-893.42z"/>
                            <text x="27085.16" y="36451.19" className="fil1 fnt0">ALMARAY</text>
                            <polygon className="fil0"
                                     points="13215.81,59357.79 18086.18,59357.79 18086.18,38257.95 13215.81,38257.95"/>
                            <path className="fil0"
                                  d="M3478 29331.12c0,2234.62 1009.19,4007.42 2855.88,4911.61 493.41,241.59 1338.27,537.22 2013.3,537.22l5564.79 0 0 -5448.83c0,-2696.28 -2263.21,-4985.15 -5448.83,-4985.15 -2593.97,0 -4985.15,2380.4 -4985.15,4985.15z"/>
                            <path className="fil0"
                                  d="M17389.97 29331.12l0 5448.83 5448.89 0c2780.2,0 4985.11,-2355.25 4985.11,-5448.83 0,-2696.28 -2263.23,-4985.15 -5448.85,-4985.15 -2593.95,0 -4985.15,2380.4 -4985.15,4985.15z"/>
                            <polygon className="fil0"
                                     points="-0,45213.95 11461.86,45213.95 11461.86,38257.95 -0,38257.95"/>
                            <polygon className="fil0"
                                     points="19686.33,45213.95 31301.97,45213.95 31301.97,38257.95 19686.33,38257.95"/>
                            <polygon className="fil0"
                                     points="3478,59357.79 11451.07,59357.79 11451.07,46755.71 3478,46755.71"/>
                            <polygon className="fil0"
                                     points="19721.05,59357.79 27823.97,59357.79 27823.97,46755.71 19721.05,46755.71"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Basket;