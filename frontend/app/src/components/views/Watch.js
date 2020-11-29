
import React from 'react';
import FilmDetail from "../../components/default/film/FilmDetail";
import './styles/Watch.scss'
import Loading from "../../components/default/loading/Loading"
import Axios from 'axios';

function fakeData(){
    return {
        filmDetail: {
            id: 1,
            name: "khi em đẹp nhất",
            year: 2020,
            country: "hàn quốc",
            director: "Oh Kyung Hoon",
            type: "phim bộ",
            style: ["tình cảm", "gia đình"],
            languege: ["việt sub"],
            process: "12/12",
            content: "Khi Em Đẹp Nhất - When I Was The Most Beautiful (2020) kể về câu chuyện em trai phải lòng chị dâu mình. Seo Hwan (Ji Soo) là một kiến trúc sư trẻ đem lòng yêu nữ nghệ nhân gốm Oh Ye Ji (Im Soo Hyang) nhưng chuyện tình bắt đầu gây cấn khi anh trai của Seo Jin (Ha Seok Jin) cũng yêu cô gái này và cưới cô làm vợ. Chuyện tình \"nhiều tay\" càng phức tạp hơn với sự xuất hiện của Carrie Jung (Hwang Seung Eon) - bạn gái cũ của Seo Jin. Phim Khi Em Đẹp Nhất sở hữu dàn cast chẳng hề là sao hạng A nhưng chất lượng không phải dạng vừa, bộ phim chóng thu hút sự chú ý bên cạnh kịch bản siêu kịch tính. Khi Em Đẹp Nhất là dự án được mong đợi bậc nhất của MBC trong những ngày sắp tới. Với cốt truyện \"drama\" không ai bằng xoay quanh \"em chồng\" thích \"chị dâu\", Khi Em Đẹp Nhất còn sở hữu lực lượng fan cứng đông đảo của hội mê \"chị đại\", bến đỗ cho cả Im Soo Hyang và Hwang Seung Eon trong trận chiến nữ chính - nữ phụ vẫn luôn hút fan cực mạnh. Khi Em Đẹp Nhất sẽ chính thức lên sóng vào 19h30 (giờ Việt Nam) thứ Tư, thứ Năm hàng tuần, bắt đầu từ ngày 19/8 trên Full Phim.",
            role: "độc quyền",
            star: 4.5,
            view: 299999,
            actor: [
                {name:"Im Soo Hyang", avatar: require("../../assets/icons/cat.jpg")},
                {name:"Ha Seok Jin", avatar: require("../../assets/icons/dog.jpeg")}, 
                {name:"Ji Soo", avatar: require("../../assets/icons/lion.jpeg")},
                {name:"Hwang Seung Eon",avatar: require("../../assets/icons/dragon.jpg")}, 
                {name:"Choi Jong Hwan",avatar: require("../../assets/icons/star_full.png")}, 
                {name:"Park Ji Young",avatar: require("../../assets/icons/dinosaur.jpeg")},
            ],
        }
    }    
}

export default class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.pathname,
            filmDetail: {},
            isLoading: true,
        }
    }
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        Axios.get(`https://gorest.co.in/public-api/todos`, requestOptions)
            .then(response=>{
                if (response.status === 200)
                    this.setState({isLoading: false, filmDetail: {...fakeData().filmDetail}})
            }).catch(function (error) {
                console.log(JSON.stringify(error))
            })
    }      
    render(){
        if(this.state.isLoading) {
            return (<Loading/>)
        }
        return (
            <div className="watch">
                <div className="padding__top"></div>
                {this.state.filmDetail ? 
                    <FilmDetail 
                         key={this.state.filmDetail.id}
                        {...this.state.filmDetail}
                    />
                    : ""
                }
            </div>   
        );
    }
        
}



