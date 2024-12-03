import React, {useState, useEffect} from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, get} from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";




function UpdateWrite(){

    const navigate = useNavigate();
    const {firebaseId} = useParams();


    let [inputValue1, setinputValue1] = useState("");
    let [inputValue2, setinputValue2] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "Ong Amigos da Fauna/Usúarios/"+firebaseId);
            const snapshot = await get(dbRef);
            if(snapshot.exists()){
                const targetObject = snapshot.val();
                setinputValue1(targetObject.NomeUsúario)
                setinputValue2(targetObject.Email)
            } else{
                alert("Error.");
            }
        }
        fetchData();
    }, [firebaseId])





    const overwriteData = async () => {
        const db = getDatabase(app);
        const NovoDoc = ref(db, "Ong Amigos da Fauna/Usúarios/"+firebaseId);
        set(NovoDoc, {
            NomeUsúario: inputValue1,
            Email: inputValue2
        }).then(() => {
            alert("Registros salvos com sucesso!")
        }).catch((error) => {
            alert("Erro: ", error.message);
        })

    }



    return(
        <div>

            <h1>ATUALIZAR</h1>

            <input type="text" value={inputValue1}
            onChange={(e) => setinputValue1(e.target.value)}
            />

            <input type="text" value={inputValue2}
            onChange={(e) => setinputValue2(e.target.value)}
            /> <br/>

            <button className="bttn2" onClick={overwriteData}>ATUALIZAR</button>
            <br/>
            <br/>
            <br/>
            <button className="bttn1" onClick={() => navigate("/updateread")}>ATUALIZAÇÂO DE DADOS</button><br/>
            <button className="bttn1" onClick={() => navigate("/read")}>IR PARA REGISTROS</button>
        </div>
    )
}

export default UpdateWrite;

