export const UserImageLabel = ({ userImg, userName }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
    >
      <img
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%'
        }}
        src={userImg} alt='Foto del usuario'
      />
      <p>{userName}</p>
    </div>
  )
}
