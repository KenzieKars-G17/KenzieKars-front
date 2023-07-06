import { CommentsDiv, CommentsForm } from "./styles";
import api from "../../services/api";
import { useState, useEffect, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/auth.context";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BsTrash, BsPencil } from "react-icons/bs";
import avatar from "../../assets/avatar.png";

const Comments = () => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [sugest, setSugest] = useState<string | null>(null);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const commentFormat = {
    comment: editValue,
  };

  const { id } = useParams();

  const jwtToken = localStorage.getItem("@TOKEN");

  const createComment = async (data: any) => {
    try {
      const response = await api.post(`advertisement/${id}/comments`, data, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      getComments();
      setEdit(false);
      return response.data;
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };

  const updateComment = async (commentId: number) => {
    try {
      const response = await api.patch(
        `advertisement/comments/${commentId}`,
        commentFormat,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
  
      getComments();
      setEdit(false);
      setEditValue(""); // <-
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

  const deleteComments = async (commentId: any) => {
    try {
      const response = await api.delete(
        `advertisement/${id}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      getComments();
      return response;
    } catch (error) {
      console.error("Erro ao obter os anuncios", error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    if (sugest) {
      data.comment = sugest;
    }
    createComment(data);
    reset();
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
                  <div style={{display:"flex", alignItems:"cemter"}}>
                    <img src={avatar} />
                    <h3>{comment.user.name}</h3>
                    <span style={{fontSize:"8pt", fontWeight:"bold", color:"gray"}}>Há {translateDate}</span>
                  </div>
                  {jwtToken && user?.id === comment.user.id && (
                    <div className="buttonsContainer">
                      <BsPencil
                        onClick={() => {
                          setEdit(!edit);
                        }}
                      />
                      <BsTrash onClick={() => deleteComments(comment.id)} />
                    </div>
                  )}
                </div>
                {edit ? (
                  <>
                    <textarea
                      className="editInput"
                      value={comment.comment}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button
                      type="submit"
                      onClick={() => {
                        updateComment(comment.id);
                      }}
                    >
                      editar
                    </button>
                  </>
                ) : (
                  <p>{comment.comment}</p>
                )}
              </li>
            );
          })}
      </CommentsDiv>

      <CommentsForm onSubmit={handleSubmit(onSubmit)}>
        <div className="UserDetailsForm">
          <img src={avatar} />
          <h3>{user?.name}</h3>
        </div>
        {sugest !== null ? (
          <textarea
            value={sugest}
            placeholder="Carro ultra confortável, foi uma ótima experiência de compra..."
            {...register("comment")}
          />
        ) : (
          <textarea
          defaultValue=""
            placeholder="Carro ultra confortável, foi uma ótima experiência de compra..."
            {...register("comment")}
          />
        )}
        <button type="submit">Comentar</button>
        <ul>
          <li style={{cursor: "pointer"}} onClick={() => setSugest("Gostei Muito!")}>Gostei muito!</li>
          <li style={{cursor: "pointer"}} onClick={() => setSugest("Incrível!")}>Incrível!</li>
          <li style={{cursor: "pointer"}} onClick={() => setSugest(" Recomendarei para meus amigos!")}>
            Recomendarei para meus amigos!
          </li>
        </ul>
      </CommentsForm>
    </>
  );
};

export default Comments;
