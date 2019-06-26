const router = require("express").Router();
const data = require("./data.json")
class EmployeeRouter{
	static getRouter(){
		

			router.get("/",(req,res) => {
				let response = [];
				let status = 200;
				try{
					response = data.data;
				}
				catch(e)
				{
				console.error("Error "+e+" Status "+e.status);	
				response = e;
				status = 500
			    }
			    finally
			    {
			    	res.send(response).status(status)
			    }
			}) // router.get end


			router.post("/",(req,res) => {
				let response = [];
				let status = 200;
				try{
					const requestData = req.body;
					data.data.push(requestData);
					response = data.data;
				   }
				   catch(e)
				   {
				   	console.log("Error "+e+" Status "+e.status);	
				    response = e;
				    status = 500
				   }
				   finally
				   {
				   	res.send(response).status(status);
				   }

			}) //request.post end
			

			router.put("/:id",(req,res) => {
				let response = [];
				let status = 200;
				try
				{
					const id = parseInt(req.params.id);
					/*const filterData = data.data.filter(datum => datum.id === id);
					filterData[0] = req.body;
					filterData[0].id =id;*/
					data.data = data.data.map((datum,index) => {
						if(datum.id === id)
						{
							datum = req.body;
							datum.id = id;
						}
						return datum;
					})
					response = data.data
				}

				catch(e)
				{
					status = 500;
					response = e;
				}
				finally
				{
                res.send(response).status(status);
				}

				})

			router.delete("/:id",(req,res) => {
				let response = [];
				let status = 200;
				let array_index;
				try
				{
					const id = parseInt(req.params.id);
					data.data.map((datum,index) => {
						if (datum.id === id)
						{
							array_index = index;
							//console.log(array_index)

						}
						
					})
					data.data.splice(array_index,1);
					response = data.data;
				}
				catch(e)
				{
					status = 500;
					response = e;
				}
				finally
				{
					res.send(response).status(status)
				}
			})
			return router;


}
}

		module.exports = EmployeeRouter;
			
