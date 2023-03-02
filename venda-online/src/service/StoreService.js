import axios from 'axios'

const url = 'http://localhost:3000/api/store/'

const urlHistory = 'http://localhost:3000/api/history/'

class StoreService{

    static getStore(){
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(item => ({
                        ...item
                    }))
                )
            } catch (err) {
                reject(err);
            }
        })
    }

    static getItem(id){
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(`${url}${id}`);
                const data = res.data;
                resolve(
                    data.map(item => ({
                        ...item
                    }))
                )
            } catch (err) {
                reject(err);
            }
        })
    }

    static getHistory(){
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(urlHistory);
                const data = res.data;
                resolve(
                    data.map(data => ({
                        ...data
                    }))
                )
            } catch (err) {
                reject(err);
            }
        })
    }

    static postItem(item){
        axios.post(url,item);
    }

    static updateItem(id,itemName,amount,movedAmount,isAddedOnStore,email){
        axios.put(`${url}${id}/${itemName}/${amount}/${movedAmount}/${isAddedOnStore}/${email}`);
    }

    static removeItem(id){
        axios.delete(`${url}${id}`)
    }
}

export default StoreService