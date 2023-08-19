import React from 'react'

const Users = ({users})=> {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">All products</h2>
        <div className="row">
          {users.map((curr) => {
            return (
              <div className="col-10 col-md-4 text-center mt-5" key={curr.id}>
                <div className="card p-2">
                  <div className="d-flex align-item-center">
                    <div className="image">
                      <img
                        src={curr.avatar_url}
                        width="155"
                        alt=""
                        className="rounded"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{curr.name}</h4>
                      <span>Web DEV</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-beetween rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Articles</span>
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>
                          <span className="number1">38</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Users