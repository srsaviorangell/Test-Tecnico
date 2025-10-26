import { useParams } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetailComponent";

const PersonagensDetailPage = () => {
  const { id } = useParams();
  const idPersonagem = Number(id);
  const CharacterDetailTyped = CharacterDetail as import("react").ComponentType<{ id: number }>;

  return (
    <div className="text-white flex flex-col items-center mt-10">
      <CharacterDetailTyped id={idPersonagem} />
    </div>
  );
};

export default PersonagensDetailPage;
