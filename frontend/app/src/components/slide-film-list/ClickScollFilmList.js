
import React from 'react';
import styled from 'styled-components'

const data = [
    {logo: "film1.jpg", name: "ráp việt", description: "Rap Việt được mua bản quyền sản xuất ..."},
    {logo: "film2.jpg", name: "Khi Em Đẹp Nhất", description: "Rap Việt được mua bản quyền sản xuất ..."},
    {logo: "film2.jpg", name: "Đại Hiệp Hoắc Nguyên Giáp", description: "Rap Việt được mua bản quyền sản xuất ..."},
    {logo: "film4.jpg", name: "Cẩm Tú Nam Ca", description: "Rap Việt được mua bản quyền sản xuất ..."}
]

const  Content  = ({ className }) => {
    return (
        <div className={className}>
            {/* Tag name and  show more data */}
            <div className="content__title">
                <div className="content__title">
                    <p>thịnh hành</p>
                </div>
                <div className="content__title capitalize location__right">
                    <p>xem thêm -> </p>
                </div>
            </div>

            {/* Data informations */}
            <div className="content__info">
                {data.map(
                    item => (
                        <div className="content__data">
                            <img className="content__img" src={require('../../assets/icons/film1.jpg')}   alt="logo"/>
                            <h3 className='capitalize'>{item.name}</h3>
                            <p className="hidden">{item.description}</p>
                        </div>
                    )
                )}
            </div>
            
        </div>
    )
}

const ClickScollFilmList = styled(Content)`
    width: auto;
    height: 365px; 
    font-family: "Roboto Bold",sans-serif;
    color: #fff;
    background-color: #707070;
    padding-left: 1rem;
    .content__title {
        
        display: flex;
        font-size: 1.5rem;
        text-transform: uppercase;
        .content__title: hover{
            color: #97db97;
        }
        .capitalize{
            text-transform: capitalize;
        }
        .location__right{
            font-size: 1.2rem;
            margin-left: 80%;
        }
    }

    .content__info {
        display:flex;
        .content__data{
            padding-left: 1rem;
            font-size: 0.7rem;
            .content__img {
                margin-top: -0.3rem;
                max-width: 150px;
                max-hight: 200px;
            }
            .capitalize{
                text-transform: capitalize;
                max-width: 150px;
            }
            .hidden{
                display:none;
                font-size: 0.6rem;
                color: rgba(214, 228, 226, 0.644);
                max-width: 150px;
            }
            
        }
        .content__data:hover{
            .hidden{
                display:block;
            }
            .content__img{
                transition: transform .2s;
                transform: scale(1.1);
            }
        }
        

    }
  }
`
export default ClickScollFilmList ;