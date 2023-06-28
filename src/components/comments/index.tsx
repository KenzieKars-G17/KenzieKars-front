import { CommentsDiv, CommentsForm } from "./styles";
import api from "../../services/api";
import { useState, useEffect, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/auth.context";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const Comments = () => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [sugest, setSugest] = useState<string | null>(null);

  const { id } = useParams();

  const createComment = async (data: any) => {
    const jwtToken = localStorage.getItem("@TOKEN");

    try {
      const response = await api.post(`advertisement/${id}/comments`, data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      getComments();
      return response.data;
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };
  const getComments = async () => {
    try {
      const response = await api.get(`advertisement/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    if (sugest) {
      data.comment = sugest;
    }
    createComment(data);
    setSugest(null);
  };

  return (
    <>
      <CommentsDiv>
        <h2>Comentários</h2>

        {comments &&
          comments.map((comment: any) => {
            const createdAt = new Date(comment.createdAt);
            const translateDate = formatDistanceToNow(createdAt, {
              locale: ptBR,
            });

            return (
              <li key={comment.id} className="individualComment">
                <div className="UserDetails">
                  <img src="data:image/jpeg;base64,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" />
                  <h3>{comment.user.name}</h3>
                  <span>Há {translateDate}</span>
                </div>
                <p>{comment.comment}</p>
              </li>
            );
          })}
      </CommentsDiv>

      <CommentsForm onSubmit={handleSubmit(onSubmit)}>
        <div className="UserDetailsForm">
          <img src="data:image/jpeg;base64,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" />
          <h3>{user?.name}</h3>
        </div>
        {sugest ? (
          <textarea
            value={sugest}
            placeholder="Carro ultra confortável, foi uma ótima experiência de compra..."
            {...register("comment")}
          />
        ) : (
          <textarea
            placeholder="Carro ultra confortável, foi uma ótima experiência de compra..."
            {...register("comment")}
          />
        )}
        <button type="submit">Comentar</button>
        <ul>
          <li onClick={() => setSugest("Gostei Muito!")}>Gostei muito!</li>
          <li onClick={() => setSugest("Incrível!")}>Incrível!</li>
          <li onClick={() => setSugest(" Recomendarei para meus amigos!")}>
            Recomendarei para meus amigos!
          </li>
        </ul>
      </CommentsForm>
    </>
  );
};

export default Comments;
