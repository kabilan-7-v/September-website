import NewsroomSection from "./Component/NewsroomSection";
import UpdatesGrid from "./Component/UpdatesGrid";

export default function NewsPage() {
  return (
    <div className="mt-14">
        <NewsroomSection/>
        <UpdatesGrid/>
        <UpdatesGrid/>
        <UpdatesGrid/>
    </div>
  );
}
