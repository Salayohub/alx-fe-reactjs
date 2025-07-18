function Header() {
  const headerstyle = {
    backgroundColor: 'navy',
    marginTop: '25px',
    color: 'white',
    fontSize: '25px',
    border: '2px dotted yellow',
    borderRadius: '10px',
    textAlign: 'center'
  }
return(
<header style={headerstyle}>
  <h1>My Favorite Cities</h1>
</header>

);
}

export default Header;