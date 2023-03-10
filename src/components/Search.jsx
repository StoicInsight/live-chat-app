import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a friend'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="userChatInfo">
          <span>Display name</span>
        </div>
      </div>
    </div>
  )
}

export default Search