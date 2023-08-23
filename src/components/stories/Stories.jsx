import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import StoryImg from "../../images/StoryImg.png"
import StoryImg1 from "../../images/StoryImg1.png"
import StoryImg2 from "../../images/StoryImg2.png"
import StoryImg3 from "../../images/StoryImg3.png"
import StoryImg4 from "../../images/StoryImg4.png"

const Stories = () => {

  const { currentUser } = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Player 1",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Player 2",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Player 4",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Player 4",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={StoryImg2} alt="" />
        <span>K-Dash{/*currentUser.name*/}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={StoryImg1} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories