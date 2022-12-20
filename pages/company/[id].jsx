import DefaultButton from "../../components/common/defaultButton";
import SecondaryButton from "../../components/common/secondaryButton";

const CompanyDetail = ({ companyDetail }) => {
  return (
    <>
      <section className=" w-full px-5 tablet:px-10">
        <div className="mt-1 flex w-full flex-col items-center rounded-xl bg-white tablet:-mt-10 tablet:flex-row tablet:items-center tablet:justify-between">
          <div className="flex flex-col items-center tablet:flex-row tablet:space-x-5">
            <img
              className="-mt-5 aspect-square h-14 w-14 rounded-xl tablet:mt-0 tablet:h-full tablet:w-24 tablet:rounded-none"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhARBxITEBIXGBMXGBUVGBkXGhcSGRIZFhoaFxkfHyggGhsmIhgaITEhJSkrLi4uFx8zODM4NygtLisBCgoKDg0OGxAQGy0lICUtLS0rLy0tLS0tLS0uLS0tLSsrLy0uLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADQQAQACAQIDBAcIAgMAAAAAAAABAgMEEQUhUTFBYXEGEjKBkaGxEyIjM8HR4fBCkhQVUv/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAqEQEAAgEEAgECBQUAAAAAAAAAAQIDBBEhMRJBURMiFDJCYXEzUqGx8P/aAAwDAQACEQMRAD8A+aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA34tJqM0b46TMdez6ra4MluYh2KzLOTRanFG96T7uf0LYMle4dmso6pFsxYcua22Ks28kq0tb8sOxEz03W4drKxvNJ920/RbOmyx+lLwt8I0xMTtPJRMbIPeHDlz22w1m3lCVaWt+WHYiZ6b7cN1ta7zjn3bT9Fk6fLEb+KX07fCLMTE81KDAJOHQavPXfFS0x17PqtrgyW5iE4x2n0xn0Wp09d81JiOvbHxhy2G9e4cmlo7hHVopscK18xyxz8a/uv/DZf7Vv0b/DFOF668z6uO3Llz2j6zzcjT5Z9ORivPp41Gh1WmrvmpaI69sfGEb4b07hy2O1e4RlaAAAAAAAAAAAAAAACdwjT1z6n8TnFY328e5q0mOL359J0jeXQdj2J4hc04Nbps9tsVomenZ8N1VM+O/FZItEqicUcR4paKcq98x0jlv5y83xjPnnbr/v9qtvK3C+xYqYccVxRtEPVrWtI2jpoiNjHmxZLbY7VmekTEuRetp2iYImJVmqrh4lropij2edrx06R1YssVz5IrX13Kq217bQtsWPHhxxXFERENta1pG0cQviIiODHmxZLbY7VtPhMSVvWZ2iXYtEovFNBj1WOZjat47J6+Eqc+njJG8doZMcTCNwnhPqff1cc+6s93jPio0+l2+66OLF7lcZMuPFXfLaKx1mYhutaKxzw0TMR2zjvTJTekxaJ745wRMWjjl2JiXPce4dXT/iYI2rPKY6T4eEvL1eCKfdXpkz4/H7odHi/Ljyj6PUr02x0zky48Nd8torHWZiI+blrVrHMkzEdvWO9MlN6TFonvjnDsTFo4diYmHN8f4bXTTGTTxtWZ2mOlvDwl5mrwRT769MWoxeP3QpmJmAAAAAAAAAAAAAAS+Gamum1G9/ZmNp8PFo02WMd956lKk7S6Klq3rvSd46w9mJiY3hej6nh+n1ETvHqz1jl8eqjLpsd/W0uTSJaOD6edPly1v2x6vw5zCnSY5pa0S5jrtu9cdvemjiK8omdp8tp5Ja61ox8O5Z4UETMTy5PJ98M679HKx9nknv3rHu2l6WgjizRh9tvH8l6aSsV5RM7T5bb7f3onrrTFIiPbuaZ2UGO9sV4tjnaY7Jh5cWms7wzxOzq9HOXPgrbUx6s9P1/h7mK1rUibRtLbTeY3lIy5K4qbz7o6ysSmdnJ8Q1GfUamZ1HKY5er/5jp/Lw8172v9zFe02nlN9HMl662a19mazMx5bbT+nvX6K0/U29LNPM+Wy441EW4Xl9bpv74mG3VRvht/DRm5pKZi/Ljyj6L46Wx05TjmS+TiV4yf47REdI2ifn2vH1VpnLMT6YM8zN53SfRnLkrrZrX2ZrMzHjG20/p71mitPn4+lmmmfLZdcarFuFZfW6b++JjZt1Mb4pac39OXGvGeaAAAAAAAAAAAAAAkaDT/8AJ1UVns7Z8o/uy7Bj+peISrG8renDfssu+mvakd8dsf3z3ejGl8bb0tMfst8OeFg1pq2+sph4vMWn7sxFZnpbnMfXZgtnrXUft0h5bWWOXFTNjmuWN4lstSLxtPSyY3RMXCNJS+8xNvCZ5fJnro8cTujGKrVgxf8AVaz70/hX5RM91u7f581dK/h8nP5ZciPCf2lZ5sOPPimuWN4lsvSLxtZdMRMbSiafhGlw5YtztMdnrTG0fJnppMdZ8kK4qxyl6rUY9Lhm2WeXzmekL8mSMdd7LLWisbyicN1ePX3mb8rR/j0jwV4NRXL/AChjtF5SNZw7T6zacsTE9Y5TsZdPTJzKd8cW7e9FocGirP2Mc57ZnnMpYsNMcfa7THFOld6SaytcH2VO2dpt4RHOI9/6MutyxFfCFWovx4wusX5ceUfRujpqjpG13DNNrpicu8W615Tt49VOXT0ycyrvirfmWzQaDBoazGCOc9szzmUsWGuP8qWPHWkcK70k1laYPsqe1O028Kxzj4z9GXWZYivhHanU5OPGHNvNYgAAAAAAAAAAAAAGzDmyYL74p2lOl7UnesuxOywx8ZyxH4lYnynb92uuvvHcJxkl5zcYz3rtjiKePbKN9be0bRGxOSVdMzM82NWmaTieo01duVq9J7vKWnFqr4427hOuSYSrcdybfdpET4zMrp19vVU/rT8K7U6nNqr75p36R3R5QyZMtsk72VzaZ7SdJxXUaau07Xr0nu8pW4tVekbdpVyzCVbj+Tb7mOInxmZ/SF06+23FU/rz8KzU6rNqr75536dI8oZMmS153tKq1pt21472x3icczEx2TCETMTvDkTstcPHs9K7Za1v4+zP7NlddeO43/wujPPtjPx7U5K7Yoinj2z/AH3OX1t5jaOC2otMcKm8zbebc56yxzO6ieXdYvy48o+j6COnqx0pc3Hsun1V63pFoi1ojaZryidufKWC2smtpiY3ZZ1E1tMbNGo9IdRkrtgrFPH2p93ZHyVX1t5jasbI21Np64U9rWvaZvMzM9sz3yyTMzO8s8zv2w44AAAAAAAAAAAAAAAAAAAAAAAAAAASC7r6RXrWI+zj/b+G6NdMfpaY1M/Co1GWc+e1pjb1pmdvOd2O9vK0z8s9p3mZa0XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
            />
            <div className="tablet:space-y-1">
              <div className="mt-4 text-h3 font-bold capitalize">Scoot</div>
              <div className="mt-3">12</div>
            </div>
          </div>
          <div className="mt-4 mb-8 tablet:m-0 tablet:mr-10">
            <SecondaryButton text="Company Site" />
          </div>
        </div>

        <div className="mt-4 rounded-md bg-white py-10 px-5">
          <div className="tablet:flex tablet:items-center tablet:justify-between">
            <div className="space-y-2">
              <h4 className=" text-dark_grey tablet:text-h3 ">
                1ago - part time
              </h4>
              <h3 className="text-h3 font-bold capitalize dark:text-white tablet:text-h2">
                senior software engineer
              </h3>
              <h4 className="font-bold capitalize text-violet">
                united kingdom
              </h4>
            </div>
            <div className="mt-10 tablet:m-0 tablet:mr-10 tablet:w-32 tablet:rounded-md">
              <DefaultButton text="Apply Now" />
            </div>
          </div>
          <p className="mt-10 break-words text-dark_grey ">
            asdflasdflksadfljsaldfjlsdfjlsasdfsdfdsfdsfdsfdsfdsfdsdsfsdfdsfldsjfldjdksdlfdsjfldsjljalsdjfsdfdkdjfksldkdjsidsdfdsfdsflkasdflkasjfdjsdjfksdafljksdalflsadjfljsdaflkjsdaklfdslkjfslkjfldskjljklkjslkdjfjlksafjlkasdfjlkdsa
          </p>
        </div>
      </section>
      <footer className="mt-20 w-full rounded-md bg-white p-5 tablet:fixed tablet:bottom-0 tablet:left-0 tablet:m-0 tablet:flex tablet:justify-center ">
        <div className="tablet:flex tablet:w-full tablet:max-w-[1440px] tablet:justify-between tablet:p-10">
          <div className="hidden tablet:block">
            <h2 className="text-h2 font-bold capitalize ">
              senior software engineer
            </h2>
            <h3 className="text-h3 capitalize text-dark_grey">
              so digital inc.
            </h3>
          </div>
          <div className="w-full tablet:w-32">
            <DefaultButton text="Apply Now" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default CompanyDetail;
