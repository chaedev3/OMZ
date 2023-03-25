import { images } from "../assets/images";
import TitleBar from "../components/common/TitleBar";
import CommunityMyPageBanner from "../components/communityPage/CommunityMyPageBanner";
import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import { getMemberArticle } from "../api/community";
import { useQuery } from "react-query";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import Loading from "../components/common/Loading";
import { useParams } from "react-router-dom";
type Article = {
  [key: string]: any;
};
// memberId 를 prop으로 받기
export default function CommunityMyPage() {
  const { memberId } = useParams();

  if (!memberId) {
    return <h3>Invalid memberId</h3>;
  }

  const memberIdNumber = parseInt(memberId);

  const { data, isLoading, isError, refetch } = useQuery("articlemy", () =>
    getMemberArticle(memberIdNumber)
  );

  if (isLoading) return <Loading />;
  if (isError) return <h3>Error...</h3>;

  return (
    <div className="flex flex-col items-center">
      <TitleBar title="Community" icon={images.community_img} goto="/" />
      <CommunityMyPageBanner />
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.data.content.map((article: Article) => (
          <CommunityArticleItem
            key={article.boardId}
            item={article}
            refetch={refetch}
          />
        ))}
      </div>
      <CommunityNavbar />
    </div>
  );
}
