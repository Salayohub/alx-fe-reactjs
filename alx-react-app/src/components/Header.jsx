function Header() {
  const headerstyle = {
    marginTop: '25px',
    color: 'red',
    fontSize: '25px',
    border: '2px dotted yellow',
    borderRadius: '10px'
  }
return(
<header style={headerstyle}>
  <h1>My Favorite Cities</h1>
</header>

);
}

export default Header;