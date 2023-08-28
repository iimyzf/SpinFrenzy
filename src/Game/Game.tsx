import { ReactP5Wrapper } from '@p5-wrapper/react';
import './Game.css';
import { io, Socket } from 'socket.io-client'
import { useEffect, useRef, useState } from 'react';
import GameField from './GameField';


function Game() {

  const [playerY, setPlayerY] = useState<number>();
  const [playerX, setPlayerX] = useState<number>();
  const [opponentX, setOpponentX] = useState<number>();
  const [opponentY, setOpponentY] = useState<number>();

  const [rightScore, setRightScore] = useState<number>(0);
  const [leftScore, setLeftScore] = useState<number>(0);

  const [ball, setBall] = useState({x: 0, y: 0});
  const [side, setSide] = useState<number>();

  const [started, setStarted] = useState<boolean>(false);

  const socketRef = useRef<Socket | null>(null);
  const [roomName, setRoomName] = useState<string>();

  const [socket, setSocket] = useState<Socket | null>(null);


  useEffect(() => {
    if (socketRef.current === null) {
      socketRef.current = io( "http://localhost:3000/game", { withCredentials: true } );
    }
    setSocket(socketRef.current);
    
    socket?.on("join_room", (data) => {
      setSide(data.side);
      setRoomName(data.roomName);
      if (data.side === 0) {
        setPlayerX(4);
        setOpponentX(988);
      }
      else {
        setPlayerX(988);
        setOpponentX(4);
      }

      setStarted(true);
      console.log("start");
    });

    socket?.on("end", () => {
      setStarted(false);
    });

    socket?.on("update", (data) => {
      if (side === 0) {
        setPlayerY(data.leftPlayerY);
        setOpponentY(data.rightPlayerY);
      } else {
        setPlayerY(data.rightPlayerY);
        setOpponentY(data.leftPlayerY);
      }
      setBall(data.ballPos);
      setRightScore(data.rightScore);
      setLeftScore(data.leftScore);
    });

    return () => {

    };

  }, [side, socket]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {

    const deltaY = event.movementY;
  
    let Side: string;
    if (side === 0) { Side = "left" }
    else { Side = "right" }
  
    socket?.emit("move", { deltaY, Side, roomName });
  }

  if (!started) {
    return (
      <div className='bg-black text-white text-xl'>
        --- waiting another player to join you ---w 
      </div>
    );
  }
  else {
    return (
      <div className="bg-black h-screen flex flex-col py-12  items-center space-y-4  overflow-y-scroll">
        <div className="absolute top-4 left-4 flex items-center space-x-2">
        <div className=" w-12 h-12 rounded-full bg-gray-400 "></div>
        <span className="text-white text-xl font-bold">leave the match</span>
        </div>
        <div className="flex space-x-16 lg:space-x-48 items-center">
          <span className="flex flex-col items-center space-y-2">
            <span className="h-16 lg:h-20 w-16 lg:w-20 canvas"></span>
            <span className='text-white text-lg font-mono font-bold'>@USER</span>
          </span>
          <span className="text-4xl lg:text-6xl text-white font-bold">VS</span>
          <span className="flex flex-col items-center space-y-2">
            <span className="h-16 lg:h-20 w-16 lg:w-20 canvas"></span>
            <span className='text-white text-lg font-mono font-bold'>@USER</span>
          </span>
        </div>
        <div className='canvas' onMouseMove={handleMouseMove}>
          <ReactP5Wrapper sketch={GameField} playerY={playerY} opponentY={opponentY}  playerX={playerX} opponentX={opponentX} side={side} ball={ball}/>
        </div>
        <div className="flex flex-col items-center">
        <span className="text-2xl lg:text-4xl text-white font-bold underline">score</span>
        <div className="flex space-x-16 lg:space-x-48 items-center">
          <span className="text-white text-2xl lg:text-4xl font-black">{leftScore}</span>
          <span className="text-white text-2xl lg:text-4xl font-black">:</span>
          <span className="text-white text-2xl lg:text-4xl font-black">{rightScore}</span>
        </div>
      </div>
    </div>
  );
  }
}

export default Game;
