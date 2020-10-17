import './index.scss';
import React from 'react';


// @id: int notnull,
// @name: string notnull,
// @year: int nullable,
// @country: string nullable,
// @director: string nullable,
// @type: string nullable,
// @style: list[string] nullable,
// @languege: list[string] nullable,
// @process: string nullable,
// @content: string nullable,
// @star: float nullable,
// @view: int nullable,
// @actor: list[string] nullable,
// @role: string nullable
export default class FilmDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: "khi em đẹp nhất",
            year: 2020,
            country: "hàn quốc",
            director: "Oh Kyung Hoon",
            type: "phim bộ",
            style: ["tình cảm","gia đình"],
            languege: ["việt sub"],
            process: "12/12",
            content: "Khi Em Đẹp Nhất - When I Was The Most Beautiful (2020) kể về câu chuyện em trai phải lòng chị dâu mình. Seo Hwan (Ji Soo) là một kiến trúc sư trẻ đem lòng yêu nữ nghệ nhân gốm Oh Ye Ji (Im Soo Hyang) nhưng chuyện tình bắt đầu gây cấn khi anh trai của Seo Jin (Ha Seok Jin) cũng yêu cô gái này và cưới cô làm vợ. Chuyện tình \"nhiều tay\" càng phức tạp hơn với sự xuất hiện của Carrie Jung (Hwang Seung Eon) - bạn gái cũ của Seo Jin. Phim Khi Em Đẹp Nhất sở hữu dàn cast chẳng hề là sao hạng A nhưng chất lượng không phải dạng vừa, bộ phim chóng thu hút sự chú ý bên cạnh kịch bản siêu kịch tính. Khi Em Đẹp Nhất là dự án được mong đợi bậc nhất của MBC trong những ngày sắp tới. Với cốt truyện \"drama\" không ai bằng xoay quanh \"em chồng\" thích \"chị dâu\", Khi Em Đẹp Nhất còn sở hữu lực lượng fan cứng đông đảo của hội mê \"chị đại\", bến đỗ cho cả Im Soo Hyang và Hwang Seung Eon trong trận chiến nữ chính - nữ phụ vẫn luôn hút fan cực mạnh. Khi Em Đẹp Nhất sẽ chính thức lên sóng vào 19h30 (giờ Việt Nam) thứ Tư, thứ Năm hàng tuần, bắt đầu từ ngày 19/8 trên Full Phim.",
            role: "độc quyền",
            star: 4.5,
            view: 299999,
            actor: [
                {name:"Im Soo Hyang", avatar: require("../../../assets/icons/cat.jpg")},
                {name:"Ha Seok Jin", avatar: require("../../../assets/icons/dog.jpeg")}, 
                {name:"Ji Soo", avatar: require("../../../assets/icons/lion.jpeg")},
                {name:"Hwang Seung Eon",avatar: require("../../../assets/icons/dragon.jpg")}, 
                {name:"Choi Jong Hwan",avatar: require("../../../assets/icons/star_full.png")}, 
                {name:"Park Ji Young",avatar: require("../../../assets/icons/dinosaur.jpeg")},
            ]
        };
    }

    render(){
        return (
            <div className="filmdetail">
                <div className="filmdetail__content">
                    <div className="filmdetail__content__one">
                        <p className="name">{this.state.name}</p>
                        <p className="role">{this.state.role}</p>
                    </div>
                    <div className="filmdetail__content__two">
                        <p className="year">{this.state.year}</p>
                        <p className="country">{this.state.country}</p>
                        {stypeMake(this.state.style)}
                    </div>
                    <div className="filmdetail__content__three">
                        <p className="process">{this.state.process}</p>
                        <p className="view">{this.state.view + " lượt xem"}</p>
                        <div className="star">
                            <p>{this.state.star}</p>
                            <div className="rating">
                                {ratiingMake(this.state.star)}
                            </div>
                        </div>
                    </div>
                    <div className="filmdetail__content__four">
                    <p className="content__title">Nội dung</p>
                    <p className="content__detail">{this.state.content}</p>                    
                    </div>
                </div>
                <div className="filmdetail__actor"> 
                    <div className="filmdetail__content__one">
                        <p className="name">Nghệ sỹ tham gia</p>
                    </div>
                    { makeActorGroupThree(this.state.actor)}   
                </div>
            </div>
        );
    }
}

function actorDetail(actor){
    return (<div className="actor">
            <img className="avatar" src={actor.avatar}/>
                <ul className="name">
                    <p>{actor.name}</p>
                </ul>
            </div>)
}

function makeActorGroupThree(actor){
    const data = []
    var len = actor.length
    var i = 0;
    if (actor !== null) {
        while (i <len) {
            data.push(
            <div className="filmdetail__content__two">{
                [actorDetail(actor[i]), actor[i+1] ? actorDetail(actor[i+1]): "", actor[i+2]? actorDetail(actor[i+2]): ""]}
            </div>)
            i=i+3
        }
        return data   
    }
    return ""
}

function ratiingMake(star) {
    if (star !== null){
        const end = []
        for (let i = 0; i < 5; i++) {
            if (star-i >= 1) end.push(<label className="full"></label>)
            else if (star-i < 1 && star-i> 0)  {
                end.push(<label className="half"></label>)
                end.push(<label className=""></label>)
            }
            else end.push(<label className=""></label>)
        }
        return end
    }
    return ""
}        

function stypeMake(style) {
    if (style !== null){
        return style.map(item=><p className="style">{item}</p>)
    }
    return ""
}        