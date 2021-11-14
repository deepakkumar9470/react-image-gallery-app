// import React from 'react'
// import {ThumbUpAltOutlined} from '@mui/icons-material'

// const ImageList = ({photo}) => {
//     return (
//         <div>
//             {photo?.map((p)=>{
//                 return (
//                     <div className=" col-md-4 col-sm-10 main_card">

//                     <div className="card">
//                       <img 
//                          className="card_img" 
//                          src=  {p.urls.small} 
//                          className="card-img-top" alt="logo"/>
  
//                       <div className="card-body">
  
//                           <div className="user_div">
//                              <div className="inner_div">
//                               <img 
//                                 className="mr-5" 
//                                 src={p.user.profile_image.small} 
//                                 className="card-img-top" alt="logo"/>
//                              </div> 
                            
//                                <div className="user_text">
//                                <h5 className="card-title">{p.user.name}</h5>
//                                <span className="card-text">@{p.user.username}</span>     
//                               </div> 
//                           </div>
                          
//                           <div className="icon_di">
//                               <ThumbUpAltOutlined/>
//                               <span className="likes">{p.user.total_likes}K</span>
//                           </div>
  
//                       </div>
//                     </div>
  
//                    </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default ImageList
