// notice :  we need to connect this with CMS to handle this content
import { ButtonGroup, Button } from "@mui/material";
import Scrollbar from "~/components/scrollbar/Scrollbar";

export default function LineCategoies() {

    return (
        <div>
            <Scrollbar sx={{ pb: 1 }}>
                <ButtonGroup sx={{ display: 'flex', minWidth: '400px' }} variant="text" color="inherit">
                    {you_can_say_this_dummmy_data.map(({ name, href }, i) => (<Button href={href} key={i} sx={{ flex: 1 }} >{name}</Button>))}
                </ButtonGroup>

            </Scrollbar>

        </div>
    )
}



const you_can_say_this_dummmy_data = [
    { name: "men", href: "/" },
    { name: "woman", href: "/" },
    { name: "kids", href: "/" },
    { name: "more", href: "/" },
]