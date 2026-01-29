import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";


export default function Profile({ clothingItems, handleCardClick }) {
     const username = "Lanre Afolabi";
  const userAvatar = null;
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        onCardClick={handleCardClick}
        clothingItems={clothingItems}
      />
    </section>
  );
}
