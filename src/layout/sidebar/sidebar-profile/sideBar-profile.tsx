import ImageProfile from '../../../assets/images/me.webp'


export const SideBarProfile = () => {
  return (
      <>
          <div className="sideBar-profile">
              <div className="sideBar-profile-inner">
                  <div className="sideBar-profile-top">
                      <img src={ImageProfile} />
                      <div className='flex flex-col gap-2 p-4 text-gray-400 px-4 text-sm '>
                          <span className='text-gray-200'>غنچه عطایی</span>
                          <span>qhoncheh@</span>
                      </div>
                  </div>
                  <button>ویرایش پروفایل</button>
              </div>
          </div>
      </>
  )
}
