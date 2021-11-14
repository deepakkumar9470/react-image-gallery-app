import React, { useState } from 'react'

import { ThumbUpAltOutlined, Instagram, Twitter, Share, InfoOutlined } from '@mui/icons-material'

import Loading from './Loading'
import DialogBox from './DialogBox';

import { Dialog } from '@mui/material'



const ImageSearch = ({ photo }) => {

  const [open, setOpen] = useState(false)
  const [curImg, setCurImg] = useState('')

  const [loading, setLoading] = useState(false);

  const handleOpen = (img) => {
    setOpen(true)
    setCurImg(img)

  }
  const onCloseHandler = () => {
    setOpen(false)
  }

  const actions = [
    <button className="closeBtn" onClick={onCloseHandler}>X</button>
  ];

  return (
    <div className="container-fluid mt-5 ml-3">

      <div className="row">

        {!loading ? photo?.map((p) => {
          return (
            <>
              <div className=" col-md-4 col-sm-10 main_card">

                <div className="card" onClick={() => handleOpen(p.urls.thumb)}>
                  <img
                    className="card_img"
                    src={p.urls.small}
                    className="card-img-top" alt="logo" />

                  <div className="card-body">

                    <div className="user_div">
                      <div className="inner_div">
                        <img
                          className="mr-5"
                          src={p.user.profile_image.small}
                          className="card-img-top" alt="logo" />
                      </div>

                      <div className="user_text">
                        <h5 className="card-title">{p.user.name}</h5>
                        <span className="card-text">@{p.user.username}</span>
                      </div>
                    </div>

                    <div className="icon_di">
                      <ThumbUpAltOutlined />
                      <span className="likes">{p.user.total_likes}K</span>
                    </div>

                  </div>

                </div>

              </div>
              <div className="dialog_container">
                <div className="dialog">
                  <Dialog
                    actions={actions}
                    modal={false}
                    open={open}
                    onRequestClose={onCloseHandler}
                  >
                    <img className="popupImg" src={curImg} alt="popupimg" />
                    <div className="btn-div">
                      {/* <div className="leftBtn">
                        <button className="shareBtn">
                          <Share className="leftIcons" /> Share</button>
                        <button className="infoBtn">
                          <InfoOutlined className="leftIcons" /> Info</button>
                      </div> */}
                      <button className="downloadBtn">Download Image</button>
                    </div>
                    <div className="card-body">

                      <div className="user_div">
                        <div className="inner_div">
                          <img
                            className="mr-5"
                            src={p.user.profile_image.small}
                            className="card-img-top" alt="logo" />
                        </div>

                        <div className="user_text">
                          <h5 className="card-title">{p.user.name}</h5>
                          <span className="card-text">@{p.user.username}</span>
                          <div className="icon-text-div">
                            <span className="card-text2">
                              <Instagram className="socIcons" /> {p.user.instagram_username}</span>
                            <span className="card-text3">
                              <Twitter className="socIcons" /> {p.user.twitter_username}</span>
                          </div>
                          <button className="closeBtn" onClick={onCloseHandler}>X</button>
                        </div>
                      </div>

                      <div className="icon_div">
                        <span>{p.user.total_photos}K downloads</span>
                        <ThumbUpAltOutlined className="likemaro"/>
                        <span className="likes">{p.user.total_likes}K</span>
                      </div>


                      <div className="tag_div">
                      <span className="relTags">Related tags</span>
                        {p.tags.map((t) => {
                          return (
                            <div key={t.id} className="tags">{t.title}</div>
                          )
                        })}
                      </div>

                    </div>

                  </Dialog>
                </div>



              </div>

            </>
          )

        }) :

          <Loading />

        }

      </div>

    </div>
  )
}

export default ImageSearch
