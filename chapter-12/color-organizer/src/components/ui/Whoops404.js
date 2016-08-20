import '../../stylesheets/Whoops404.scss'

const asciiArt = `
 ______   __     __         ______        __   __     ______     ______      ______   ______     __  __     _____
/\\  ___\\ /\\ \\   /\\ \\       /\\  ___\\      /\\ "-.\\ \\   /\\  __ \\   /\\__  _\\    /\\  ___\\ /\\  __ \\   /\\ \\/\\ \\   /\\  __-.
\\ \\  __\\ \\ \\ \\  \\ \\ \\____  \\ \\  __\\      \\ \\ \\-.  \\  \\ \\ \\/\\ \\  \\/_/\\ \\/    \\ \\  __\\ \\ \\ \\/\\ \\  \\ \\ \\_\\ \\  \\ \\ \\/\\ \\
 \\ \\_\\    \\ \\_\\  \\ \\_____\\  \\ \\_____\\     \\ \\_\\\\"\\_\\  \\ \\_____\\    \\ \\_\\     \\ \\_\\    \\ \\_____\\  \\ \\_____\\  \\ \\____-
  \\/_/     \\/_/   \\/_____/   \\/_____/      \\/_/ \\/_/   \\/_____/     \\/_/      \\/_/     \\/_____/   \\/_____/   \\/____/
`

const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <pre>{asciiArt}</pre>
        <h1>{location.pathname}</h1>
    </div>

export default Whoops404