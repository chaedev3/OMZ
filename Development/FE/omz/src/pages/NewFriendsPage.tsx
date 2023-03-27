import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FriendsRecommend from "../components/newFriends/FriendsRecommend";
import ModalBlackBg from "../components/common/ModalBlackBg";
import FriendRefuseModal from "../components/newFriends/FriendRefuseModal";
import { useEffect, useState } from "react";
import FriendsProposalModal from "../components/newFriends/FriendsProposalModal";
import FriendSearchItems from "../components/newFriends/FriendSearchItems";
import FriendSearchList from "../components/newFriends/FriendSearchList";
import { useMutation } from "react-query";
import { searchFriend } from "../api/newFriend";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
export default function NewFriendsPage() {
  const [modalFor, setModalFor] = useState<{
    memberId: number;
    nickname: string;
  }>({ memberId: 0, nickname: "" });

  const handleModalFor = (memberId: number, nickname: string) => {
    setModalFor({ memberId, nickname });
  };

  const [isRefuse, setIsRefuse] = useState(false);
  const handleRefuseModal = () => {
    setIsRefuse((prev) => !prev);
  };

  const [isProposal, setIsProposal] = useState(false);
  const handleProposalModal = () => {
    setIsProposal((prev) => !prev);
  };

  const [word, setWord] = useState("");
  const handleSearch = (e: any) => {
    setWord(e.target.value);
  };

  const [searchList, setSearchList] = useState<
    {
      memberId?: number;
      nickname?: string;
      requestPossible?: boolean;
      file?: null;
    }[]
  >([]);

  const goSearchFriends = useMutation(
    (gogo: { memberId: number; word: string }) =>
      searchFriend(gogo.memberId, gogo.word),
    {
      onSuccess(data) {
        setSearchList(data.data);
        console.log(data);
      },
    }
  );

  const memberId = useRecoilValue(userStatus).id;

  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    if (word === "") {
      setSearchActive(false);
    } else {
      setSearchActive(true);
      goSearchFriends.mutate({ memberId, word });
    }
  }, [word]);

  return (
    <div className="flex flex-col items-center w-full">
      {isRefuse && (
        <ModalBlackBg
          modal={<FriendRefuseModal handleRefuseModal={handleRefuseModal} />}
        />
      )}
      {isProposal && (
        <ModalBlackBg
          modal={
            <FriendsProposalModal
              handleProposalModal={handleProposalModal}
              modalFor={modalFor}
            />
          }
        />
      )}

      <TitleBar icon={images.my_friends_img} title="New Friends" goto="/" />
      <div className="w-11/12 border border-solid rounded-lg border-black h-12 bg-white flex px-2 mt-4">
        <div className="h-full w-12 flex justify-center items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          className="h-full w-full outline-none"
          type="search"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
          value={word}
        />
      </div>
      {searchActive ? (
        <FriendSearchList
          searchList={searchList}
          handleModalFor={handleModalFor}
          handleProposalModal={handleProposalModal}
        />
      ) : (
        <FriendsRecommend
          handleRefuseModal={handleRefuseModal}
          handleModalFor={handleModalFor}
          handleProposalModal={handleProposalModal}
        />
      )}
    </div>
  );
}
