// import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
//  import { Container } from "react-bootstrap";6 
import Footer from "../components/Footer";
import Carousel from 'react-bootstrap/Carousel';

// import { Link } from "react-router-dom";






function Homer(){


  

    return(

        <>

<Navbar/> 

                <div className="signup__page"> 

                  
                    <div className="header_section">
{/* ----------- svg for the header section ---------- */}

                  
                     
                        {/* -------------------- this is a comment ------------------ */}
                        <div className="text_section">
                            <h3>About <b> Us</b> </h3>
                            <p> We are an Information Technology Firm, With special Focus on <br/> Efeective Delivery Using Suitable and Cost Effective Technology<br/>
                                Our Firm Creates Real Value for it’s Clientsand Employee by deliveringhihe quality Technologyand stra</p>
                        
                          
                            {/* <button className="cta_01">  Get started   </button> */}
                            {/* <button className="cta_02"> Read about Us <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>  </button> */}
                        </div>
                        {/*  */}
                        

                        

                        <div>
                        <img alt= "het" src="./assets/about.svg"/>

                        </div>
                       
   
                    

                    </div>
                        {/* -------------------- Sponsor section ------------------ */}


                    <div className="sponsor_section">
                    
                    <h3 className="vision_header"> Our Vision  <br /> <svg className="" width="61" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y=".5" width="61" height="5" rx="1" fill="#5778EB"/></svg> </h3>

                    <p className="vision_p">To be the most Sought and IT and Security Company in Nigeria with a knack For Excellence and quality Delivery</p>

                     </div>

                        {/* -------------------- What we do Section ------------------ */}

                     <div className="v_section">
                        <div className="values_section">


                            <div className="v_card">
                           
                                <h3 className="ed_txt">We are driven by Our values</h3>
                                
                            
                            


                            </div>


                            <div className="v_card">
                            <svg width="75" height="75" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.301" cy="37.301" r="37.301" fill="#3910DE" fill-opacity=".13"/><path d="M30.822 28.37h14.01c.868 0 1.639.028 2.325.126 3.685.406 4.68 2.143 4.68 6.878v2.802c0 4.736-.995 6.473-4.68 6.88-.686.097-1.457.125-2.325.125h-14.01c-.869 0-1.64-.028-2.326-.126-3.684-.406-4.68-2.143-4.68-6.879v-2.802c0-4.735.996-6.472 4.68-6.878.687-.098 1.457-.126 2.326-.126Z" stroke="#3910DE" stroke-width="2.101" stroke-linecap="round" stroke-linejoin="round"/><path d="M44.832 45.181c.868 0 1.639-.028 2.325-.126.014.196.014.378.014.589v.476c0 3.727-.938 4.665-4.68 4.665h-9.33c-3.74 0-4.679-.938-4.679-4.665v-.476c0-.21 0-.393.014-.589.687.098 1.457.126 2.326.126h14.01ZM33.161 22.766h9.33c3.742 0 4.68.938 4.68 4.665v.476c0 .21 0 .392-.014.589-.686-.098-1.457-.126-2.325-.126h-14.01c-.869 0-1.64.028-2.326.126-.014-.197-.014-.379-.014-.589v-.476c0-3.727.939-4.665 4.68-4.665Z" stroke="#3910DE" stroke-width="2.101" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <div>
                                <h3 className="tech">Technology</h3>
                                    <span>We Provide Technology that surpasees you Needs and we can assertain and we provide Compact Technology
                                    </span>
                            </div>
                            


                            </div>

                            <div className="v_card">
                            <svg width="76" height="75" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.903" cy="37.301" r="37.301" fill="#D67D14" fill-opacity=".02"/><path d="M46.572 33.46a.872.872 0 0 0-.275 0 3.718 3.718 0 0 1-3.583-3.727 3.718 3.718 0 0 1 3.728-3.727 3.727 3.727 0 0 1 3.727 3.727 3.74 3.74 0 0 1-3.597 3.728ZM45.084 43.979c1.98.332 4.16-.015 5.692-1.04 2.037-1.359 2.037-3.584 0-4.942-1.546-1.026-3.756-1.372-5.736-1.026M29.191 33.46a.872.872 0 0 1 .275 0 3.718 3.718 0 0 0 3.583-3.727 3.718 3.718 0 0 0-3.728-3.727 3.727 3.727 0 0 0-3.727 3.727 3.74 3.74 0 0 0 3.597 3.728ZM30.68 43.979c-1.98.332-4.162-.015-5.693-1.04-2.037-1.359-2.037-3.584 0-4.942 1.546-1.026 3.756-1.372 5.736-1.026M37.903 44.253a.872.872 0 0 0-.274 0 3.718 3.718 0 0 1-3.583-3.727 3.718 3.718 0 0 1 3.727-3.728 3.727 3.727 0 0 1 3.728 3.727c-.015 2.023-1.604 3.67-3.598 3.728ZM33.699 48.804c-2.037 1.358-2.037 3.583 0 4.941 2.311 1.546 6.097 1.546 8.408 0 2.037-1.358 2.037-3.583 0-4.941-2.297-1.532-6.097-1.532-8.408 0Z" stroke="#D67D14" stroke-width="2.167" stroke-linecap="round" stroke-linejoin="round"/></svg>

                            <div>
                                <h3 className="tech">Outsourcing</h3>
                                    <span>We Provide Technology that surpasees you Needs and we can assertain and we provide Compact Technology
                                    </span>
                            </div>

                            </div>

                        <div className="v_card">
                        <svg width="75" height="75" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.505" cy="37.301" r="37.301" fill="#42C3FF" fill-opacity=".13"/><path d="M52.04 31.172v7.004c0 5.604-2.802 8.406-8.406 8.406h-.7c-.434 0-.855.21-1.12.56l-2.102 2.803c-.925 1.233-2.438 1.233-3.363 0l-2.101-2.802c-.224-.309-.743-.56-1.12-.56h-.701c-5.604 0-8.406-1.402-8.406-8.407v-7.004c0-5.604 2.802-8.406 8.406-8.406h5.604" stroke="#42C3FF" stroke-width="1.576" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M42.514 26.436c-.463-1.387.084-3.096 1.597-3.572.784-.238 1.765-.042 2.325.7.533-.77 1.541-.938 2.326-.7 1.513.462 2.06 2.185 1.597 3.572-.714 2.2-3.222 3.335-3.923 3.335-.7 0-3.18-1.121-3.922-3.335Z" stroke="#42C3FF" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round"/><path d="M43.63 35.374h.012M38.024 35.374h.013M32.419 35.374h.013" stroke="#42C3FF" stroke-width="2.101" stroke-linecap="round" stroke-linejoin="round"/></svg>

                        <div>
                                <h3 className="tech">Consulting</h3>
                                    <span>We Provide Technology that surpasees you Needs and we can assertain and we provide Compact Technology
                                    </span>
                            </div>
                        </div>
                        </div>

                     </div>

                        {/* -------------------- How it Works Section ------------------ */}

                <div className="hiw_section">
                <h3 className="text-center">Testimonials  <br /> <svg className="" width="61" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y=".5" width="61" height="5" rx="1" fill="#5778EB"/></svg> </h3>
                



                <h3 className="vision_header"> Our Team  <br /> <svg className="" width="61" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y=".5" width="61" height="5" rx="1" fill="#5778EB"/></svg> </h3>

                <div className="hiw_card_section">
       
               <div className="team_stack">
               <img src="./assets/team01.svg" />
               <div>
                        <h5>Tunde Ayodeji AKintemi</h5>
                        <span>
                        The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through. The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through.The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through
                        </span>
                        </div>
                        </div> 
                        <div className="team_stack">
               <div>
                        <h5>Tunde Ayodeji AKintemi</h5>
                        <span>
                        The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through. The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through.The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through
                        </span>


                        </div>
               <img src="./assets/team02.svg" />

                        </div> 
                        <div className="team_stack">
               <img src="./assets/team03.svg" />

               <div>
                        <h5>Tunde Ayodeji AKintemi</h5>
                        <span>
                        The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through. The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through.The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through
                        </span>


                        </div>
                        
               </div>
               <div className="team_stack">
               <div>
                        <h5>Tunde Ayodeji AKintemi</h5>
                        <span>
                        The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through. The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through.The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through
                        </span>


                        </div>
               <img src="./assets/team04.svg" />

                        </div> 
                        <div className="team_stack">
               <img src="./assets/team05.svg" />

               <div>
                        <h5>Tunde Ayodeji AKintemi</h5>
                        <span>
                        The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through. The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through.The best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me throughThe best Online learning plartform i’ve used so far i can easily understand things and mentors are available to help me through
                        </span>


                        </div>
                        
               </div>
                        
                
                   

                </div> 

              
              
                </div>
                        {/* -------------------- Newsletter Section ------------------ */}
            

                {/* <div className="newsletter_section">
                    <svg className="objectt" width="743" height="368" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" stroke-width="2"><path d="M2041.13-1202.4c282.99 359.253-211.35 1723.267-457.47 2370.87-246.12 647.59-357.51 597.66-723.899 737.61-366.394 139.95-683.816 119.75-1034.789-65.84-350.974-185.6-331.511-287.55-649.885-825.03C-1143.29 477.728-1922.02-412.353-1703.22-739.674-1484.42-1067-554.746-459.533 225.328-555.933 1005.4-652.334 1758.15-1561.65 2041.13-1202.4Zm0 0c282.99 359.253-211.35 1723.267-457.47 2370.87" stroke="url(#b)"/><path d="M1976.14-1145.57c270.13 342.918-201.74 1644.93-436.67 2263.09-234.94 618.17-341.26 570.5-690.998 704.09-349.74 133.59-652.733 114.31-987.754-62.85-335.02-177.16-316.442-274.48-620.344-787.527C-1063.53 458.183-1806.87-391.44-1598.01-703.883c208.85-312.447 1096.27 267.408 1840.886 175.389C987.492-620.512 1706.02-1488.49 1976.14-1145.57Zm0 0c270.13 342.918-201.74 1644.93-436.67 2263.09" stroke="url(#c)"/><path d="M1911.16-1088.75c257.26 326.592-192.14 1566.604-415.89 2155.33-223.74 588.73-325 543.33-658.087 670.56-333.085 127.23-621.651 108.87-940.718-59.86-319.067-168.72-301.373-261.4-590.803-750.023C-983.769 438.638-1691.71-370.527-1492.8-668.092c198.91-297.565 1044.067 254.674 1753.225 167.037C969.583-588.691 1653.9-1415.34 1911.16-1088.75Zm0 0c257.26 326.592-192.14 1566.604-415.89 2155.33" stroke="url(#d)"/><path d="M1846.17-1031.92c244.4 310.257-182.53 1488.268-395.09 2047.56-212.56 559.29-308.76 516.16-625.186 637.03-316.431 120.87-590.568 103.42-893.682-56.87-303.113-160.29-286.304-248.33-561.263-712.519-274.96-464.188-947.499-1232.895-758.539-1515.582 188.96-282.686 991.864 241.941 1665.564 158.686S1601.77-1342.19 1846.17-1031.92Zm0 0c244.4 310.257-182.53 1488.268-395.09 2047.56" stroke="url(#e)"/><path d="M1781.18-975.1c231.54 293.931-172.92 1409.942-374.29 1939.796-201.37 529.854-292.51 488.994-592.285 603.504-299.777 114.5-559.486 97.98-846.646-53.87-287.16-151.86-271.236-235.27-531.723-675.025C-824.252 399.547-1461.4-328.701-1282.38-596.509c179.02-267.809 939.661 229.206 1577.903 150.333C933.765-525.049 1549.65-1269.03 1781.18-975.1Zm0 0c231.54 293.931-172.92 1409.942-374.29 1939.796" stroke="url(#f)"/><path d="M1716.19-918.276c218.68 277.602-163.31 1331.612-353.5 1832.03-190.18 500.416-276.25 461.826-559.374 569.976-283.123 108.14-528.403 92.53-799.61-50.88-271.207-143.42-256.167-222.2-502.183-637.522C-744.493 380.002-1346.24-307.788-1177.17-560.718c169.07-252.93 887.458 216.473 1490.242 141.982 602.784-74.492 1184.448-777.144 1403.118-499.54Zm0 0c218.68 277.602-163.31 1331.612-353.5 1832.03" stroke="url(#g)"/><path d="M1651.21-861.452C1857.01-600.179 1497.5 391.83 1318.5 862.811c-179 470.979-260.01 434.659-526.473 536.449-266.468 101.78-497.321 87.09-752.574-47.89-255.254-134.98-241.099-209.12-472.643-600.018-231.545-390.895-797.9-1038.227-638.77-1276.279 159.127-238.052 835.254 203.739 1402.581 133.63C897.947-461.406 1445.4-1122.72 1651.21-861.452Zm0 0C1857.01-600.179 1497.5 391.83 1318.5 862.811" stroke="url(#h)"/><path d="M1586.22-804.628c192.94 244.943-144.11 1174.952-311.91 1616.497-167.81 441.541-243.76 407.491-493.572 502.921-249.814 95.42-466.238 81.65-705.538-44.9-239.3-126.54-226.03-196.05-443.103-562.514S-1115.93-265.962-966.75-489.136C-817.569-712.309-183.699-298.13 348.17-363.858c531.868-65.727 1045.1-685.712 1238.05-440.77Zm0 0c192.94 244.943-144.11 1174.952-311.91 1616.497" stroke="url(#i)"/><path d="M1521.23-747.804c180.08 228.614-134.5 1096.622-291.12 1508.731-156.62 412.103-227.5 380.333-460.661 469.393-233.16 89.06-435.156 76.2-658.502-41.9-223.347-118.11-210.962-182.99-413.563-525.02C-505.217 321.367-1000.78-245.049-861.54-453.344-722.304-661.64-130.692-275.072 365.719-336.418c496.41-61.346 975.431-639.999 1155.511-411.386Zm0 0c180.08 228.614-134.5 1096.622-291.12 1508.731" stroke="url(#j)"/><path d="M1456.24-690.98c167.22 212.284-124.89 1018.292-270.32 1400.964-145.44 382.676-211.255 353.166-427.76 435.866-216.506 82.7-404.073 70.76-611.467-38.91C-60.7 997.268-49.199 937.026-237.329 619.424c-188.13-317.603-648.292-843.56-519.001-1036.977C-627.039-610.97-77.685-252.015 383.267-308.979 844.22-365.943 1289.02-903.264 1456.24-690.98Zm0 0c167.22 212.284-124.89 1018.292-270.32 1400.964" stroke="url(#k)"/><path d="M1391.26-634.156c154.35 195.955-115.29 939.962-249.54 1293.198-134.24 353.238-194.998 325.997-394.849 402.338-199.851 76.33-372.991 65.32-564.431-35.92C-9 924.227 1.616 868.619-172.042 575.448-345.7 282.276-770.465-203.223-651.12-381.762-531.774-560.301-24.679-228.957 400.816-281.539 826.311-334.121 1236.9-830.11 1391.26-634.156Zm0 0c154.35 195.955-115.29 939.962-249.54 1293.198" stroke="url(#l)"/><path d="M1326.27-577.331c141.49 179.624-105.68 861.631-228.74 1185.43-123.058 323.8-178.752 298.831-361.948 368.807-183.197 69.974-341.908 59.874-517.395-32.922C42.7 851.186 52.432 800.212-106.755 531.472-265.942 262.731-655.309-182.31-545.909-345.97c109.4-163.661 574.237 140.07 964.274 91.87 390.037-48.2 766.405-502.856 907.905-323.231Zm0 0c141.49 179.624-105.68 861.631-228.74 1185.43" stroke="url(#m)"/><path d="M1261.28-520.507c128.63 163.295-96.07 783.301-207.94 1077.664C941.466 851.52 890.835 828.821 724.293 892.436 557.75 956.05 413.468 946.87 253.934 862.507 94.401 778.144 103.248 731.805-41.468 487.495c-144.715-244.309-498.686-648.892-399.231-797.674 99.454-148.783 522.034 127.337 876.613 83.518 354.579-43.818 696.736-457.142 825.366-293.846Zm0 0c128.63 163.295-96.07 783.301-207.94 1077.664" stroke="url(#n)"/><path d="M1196.29-463.683c115.77 146.966-86.46 704.971-187.15 969.898-100.68 264.927-146.248 244.497-296.136 301.75-149.888 57.254-279.743 48.991-423.323-26.935-143.58-75.927-135.618-117.632-265.862-337.511-130.243-219.878-448.817-584.003-359.308-717.907 89.509-133.904 469.831 114.604 788.952 75.167s627.067-411.428 742.827-264.462Zm0 0c115.77 146.966-86.46 704.971-187.15 969.898" stroke="url(#o)"/><path d="M1131.3-406.859c102.91 130.636-76.85 626.641-166.349 862.131-89.498 235.491-130.002 217.332-263.236 268.223-133.234 50.892-248.66 43.547-376.287-23.943-127.627-67.49-120.549-104.561-236.322-300.009-115.772-195.448-398.948-519.114-319.385-638.14 79.564-119.026 417.628 101.87 701.291 66.815C754.675-206.836 1028.4-537.495 1131.3-406.859Zm0 0c102.91 130.636-76.85 626.641-166.349 862.131" stroke="url(#p)"/><path d="M1066.32-350.035c90.04 114.307-67.252 548.311-145.562 754.365-78.311 206.054-113.752 190.165-230.332 234.695s-217.578 38.104-329.251-20.95c-111.674-59.054-105.481-91.491-206.782-262.508-101.3-171.017-349.08-454.225-279.462-558.372 69.619-104.148 365.424 89.136 613.63 58.463 248.205-30.673 487.715-320 577.759-205.693Zm0 0c90.04 114.307-67.252 548.311-145.562 754.365" stroke="url(#q)"/><path d="M1001.33-293.211c77.18 97.977-57.643 469.981-124.766 646.599-67.123 176.618-97.502 162.998-197.427 201.167-99.926 38.169-186.495 32.66-282.215-17.957-95.721-50.618-90.412-78.422-177.242-225.007C132.851 165.005-79.531-77.745-19.858-167.014c59.672-89.27 313.22 76.402 525.967 50.111 212.748-26.291 418.042-274.285 495.221-176.308Zm0 0c77.18 97.977-57.643 469.981-124.766 646.599" stroke="url(#r)"/><path d="M936.342-236.387c64.318 81.648-48.035 391.651-103.971 538.832-55.937 147.182-81.252 135.832-164.523 167.64-83.271 31.807-155.413 27.217-235.179-14.965-79.767-42.181-75.344-65.351-147.701-187.506C212.61 145.46 35.625-56.832 85.352-131.223c49.727-74.391 261.017 63.669 438.307 41.76 177.289-21.91 348.368-228.572 412.683-146.924Zm0 0c64.318 81.648-48.035 391.651-103.971 538.832" stroke="url(#s)"/><path d="M871.354-179.563c51.452 65.318-38.428 313.321-83.177 431.066-44.749 117.745-65.001 108.666-131.618 134.111-66.617 25.446-124.33 21.774-188.144-11.971-63.813-33.745-60.274-52.281-118.16-150.005-57.886-97.724-199.475-259.557-159.693-319.07 39.782-59.512 208.814 50.935 350.645 33.408 141.832-17.527 278.695-182.857 330.147-117.539Zm0 0c51.452 65.318-38.428 313.321-83.177 431.066" stroke="#5778EB"/><path d="M806.366-122.739c38.589 48.989-28.821 234.991-62.383 323.3-33.561 88.309-48.75 81.499-98.713 100.583-49.963 19.085-93.248 16.33-141.108-8.978-47.86-25.309-45.206-39.211-88.62-112.504-43.415-73.293-149.606-194.668-119.77-239.302 29.837-44.635 156.61 38.2 262.984 25.055 106.374-13.145 209.021-137.142 247.61-88.154Zm0 0c38.589 48.989-28.821 234.991-62.383 323.3" stroke="#5778EB"/><path d="M741.378-65.915c25.726 32.66-19.214 156.66-41.588 215.533-22.375 58.873-32.501 54.333-65.809 67.056-33.309 12.723-62.165 10.887-94.072-5.986-31.907-16.872-30.137-26.14-59.08-75.002-28.943-48.862-99.738-129.778-79.847-159.535C420.873-53.605 505.389 1.618 576.305-7.145c70.916-8.764 139.347-91.429 165.073-58.77Zm0 0c25.726 32.66-19.214 156.66-41.588 215.533" stroke="#5778EB"/><path d="M676.391-9.09c12.863 16.329-9.607 78.33-20.795 107.766-11.187 29.436-16.25 27.166-32.904 33.528-16.654 6.361-31.083 5.443-47.036-2.993-15.953-8.436-15.069-13.07-29.54-37.501-14.472-24.431-49.869-64.89-39.923-79.768 9.945-14.878 52.203 12.734 87.661 8.352S663.528-25.42 676.391-9.09Zm0 0c12.863 16.329-9.607 78.33-20.795 107.766" stroke="#5778EB"/></g><defs><linearGradient id="b" x1="-230.077" y1="-1544.9" x2="1452.88" y2="1640.37" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="c" x1="-191.828" y1="-1472.51" x2="1414.63" y2="1567.98" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="d" x1="-153.579" y1="-1400.12" x2="1376.38" y2="1495.58" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="e" x1="-115.33" y1="-1327.72" x2="1338.14" y2="1423.19" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="f" x1="-77.081" y1="-1255.33" x2="1299.89" y2="1350.8" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="g" x1="-38.832" y1="-1182.94" x2="1261.64" y2="1278.41" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="h" x1="-.583" y1="-1110.55" x2="1223.39" y2="1206.01" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="i" x1="37.666" y1="-1038.15" x2="1185.14" y2="1133.62" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="j" x1="75.916" y1="-965.762" x2="1146.89" y2="1061.23" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="k" x1="114.164" y1="-893.369" x2="1108.64" y2="988.837" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="l" x1="152.414" y1="-820.977" x2="1070.39" y2="916.444" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="m" x1="190.663" y1="-748.584" x2="1032.14" y2="844.051" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="n" x1="228.912" y1="-676.192" x2="993.894" y2="771.659" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="o" x1="267.161" y1="-603.799" x2="955.645" y2="699.266" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="p" x1="305.41" y1="-531.407" x2="917.396" y2="626.874" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="q" x1="343.659" y1="-459.014" x2="879.146" y2="554.481" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="r" x1="381.908" y1="-386.622" x2="840.897" y2="482.089" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><linearGradient id="s" x1="420.157" y1="-314.229" x2="802.648" y2="409.696" gradientUnits="userSpaceOnUse"><stop offset=".45" stop-color="#5778EB"/><stop offset="1"/></linearGradient><clipPath id="a"><path fill="#fff" transform="rotate(-27.85 -295.965 -74.678)" d="M0 0h898.24v914.879H0z"/></clipPath></defs></svg>
                <h3>Join the Community</h3>
               <form action="">
<svg className="emaill" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.487 13.514c0-5.487 3.135-7.838 7.837-7.838H27c4.703 0 7.838 2.351 7.838 7.838v10.973c0 5.486-3.135 7.837-7.838 7.837H11.324" stroke="#A5A5A5" stroke-width="2.351" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m27 14.297-4.907 3.92c-1.614 1.285-4.263 1.285-5.878 0l-4.89-3.92M3.487 26.054h9.405M3.487 19.784h4.702" stroke="#A5A5A5" stroke-width="2.351" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>

                   <input type="text" placeholder="Enter your Email" />

                   <button> Suscribe</button>
               </form>
                </div> */}

                    <Footer/>
                </div>
          
        </>
    );
}

export default Homer;