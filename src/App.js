import Message from './components/Message.js'
import Button from './components/Button.js'
import { useState } from 'react';


function App() {
	const [count, setCount] = useState(0);

    function onClick() {
        setCount(count +1);
    }

	return (
		<div>
			<Message />
			<Button count={count} onClick={onClick}/>
			<Button count={count} onClick={onClick}/>
		</div>
	);
}

export default App;
