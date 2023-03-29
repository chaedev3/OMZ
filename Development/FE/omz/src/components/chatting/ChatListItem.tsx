// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faCircle } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { addFriends } from "../../api/chatting";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
type Chat = {
  [key: string]: any;
};

type Props = {
  item: Chat;
  refetch: any;
};

export default function ChatListItem({ item, refetch }: Props) {
  const navigate = useNavigate();
  const memberId = useRecoilValue(userStatus).id;
  const handleClick = (roomid: number) => {
    navigate(`${roomid}`, {
      state: { roomid },
    });
  };

  // 지금 시각과 제일 최근에 보낸 채팅의 시각의 차이 를 구함
  const createdTime = item?.recentMessageCreatedTime;
  const now = new Date();
  const chatTime = moment(createdTime);
  const nowTime = moment(now);

  const timeGapMinute = Math.trunc(
    moment.duration(nowTime.diff(chatTime)).asMinutes()
  );

  const timeGapHour = Math.trunc(
    moment.duration(nowTime.diff(chatTime)).asHours()
  );

  // addFriend
  const addFriend = useMutation(
    (chatMembersInfo: {
      chatOtherInfo: {
        file: string;
        friendState: number;
        memberId: number;
        nickname: string;
      };
      memberId: number;
    }) => addFriends(chatMembersInfo),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const friendInfo = {
    chatOtherInfo: {
      file: item.chatOtherInfo.file,
      friendState: item.chatOtherInfo.friendState,
      memberId: item.chatOtherInfo.memberId,
      nickname: item.chatOtherInfo.nickName,
    },
    memberId: memberId,
  };

  const handleFriend = () => {
    addFriend.mutate(friendInfo);
  };

  return (
    <>
      <div
        onClick={() => handleClick(item?.roomId)}
        className="flex flex-col justify-start items-start w-full h-2/12 gap-2.5 px-5 py-[5px] border-t-0 border-r-0 border-b border-l-0 border-white"
      >
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 py-2.5">
          {/* TODO: 나중에 바꾸기 (item?.chatOtherInfo.file)  */}
          <img
            className="flex-grow-0 flex-shrink-0 h-full w-2/12"
            src={images.new_friends_img}
          />
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-8/12 gap-[7px]">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-[#3d3d3d]">
                  {item?.chatOtherInfo.nickName}
                </p>
              </div>
              {!item?.chatOtherInfo.friendState && (
                <button
                  className="border-black border-2 p-2 hover:bg-black/20"
                  onClick={(e) => {
                    e?.stopPropagation();
                    handleFriend();
                  }}
                >
                  친구추가
                </button>
              )}
              {/* <div className="flex justify-center items-center relative rounded-[10px] bg-black">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-[3px]">
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-white">
                    친구 추가
                  </p>
                </div>
                <FontAwesomeIcon icon={faPlus} className="text-white" />
              </div> */}
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#636363]">
                {item?.recentMessage}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left">
              {timeGapMinute > 60
                ? timeGapHour + "시간 전"
                : timeGapMinute + "분 전"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
