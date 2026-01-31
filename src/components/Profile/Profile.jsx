import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

export default function Profile({
  clothingItems,
  handleCardClick,
  onAddItemClick,
}) {
  const username = "Lanre Afolabi";
  const userAvatar = null;
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        onAddItemClick={onAddItemClick}
      />
    </section>
  );
}
