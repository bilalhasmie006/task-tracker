import PropTypes from 'prop-types'
import Button from './button'

const Header = (props) => {
    const customstyle_obj= {color :props.color}//obj is created{}
    // const v= {props.color}
const onClick = (e) => {
  console.log("this is for an event if an event of clicking occurs..if an event occurs then this function will be called")
}

    return (
     
      <header>
        <h1 style={customstyle_obj}>{props.title}</h1>
        <Button color='green' text='add' onClick={onClick} />
      </header>
    ) 
  }


  Header.defaultProps = {
    title : 'task tracker',
    color : 'orange'
    }
   Header.propTypes={
   title : PropTypes.string.isRequired,
    }

    export default Header


