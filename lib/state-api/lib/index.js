class DataApi {
  constructor(data){
    this.rowData = data;
  }

  mapIntoObject(arr){
    return arr.reduce((acc, elm) => {
      acc[elm.id] = elm;
      return acc;
    }, {});
  }  

  getArticles(){
    return this.mapIntoObject(this.rowData.articles);
  }

  getAuthors(){
    return this.mapIntoObject(this.rowData.authors);
  }

}

export default DataApi;