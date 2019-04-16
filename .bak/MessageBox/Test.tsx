import React from 'react';
import ReactDOM from 'react-dom';

// import Portal from "../common/Portal";
import MessageBox from './MessageBox';
let div: any;

// const Test: React.SFC<MessageBoxProps & { v: boolean }> = props => {
//   const { v = false, time, content } = props;
//   const [vi, setVi] = React.useState(v);
//   React.useEffect(() => {
//     setVi(v);
//   }, [v]);
//   return (
//     <Portal time={time} visible={vi}>
//       <div>
//         <h1
//           onClick={() => {
//             setVi(!vi);
//           }}
//         >
//           hello React!,{content}
//           <br />
//           {vi ? "true" : "false"}
//         </h1>
//       </div>
//     </Portal>
//   );
// };

interface MessageBoxProps {
    time: number;
    content: string;
}

export default class MessageBoxWrap extends React.PureComponent<MessageBoxProps, { v: boolean; content: any }> {
    private constructor(props: any) {
        super(props);
        this.state = {
            v: props.v,
            content: props.content,
        };
    }
    public static create = (props: MessageBoxProps) => {
        div = document.createElement('div');
        document.body.appendChild(div);
        const message: any = ReactDOM.render(<MessageBoxWrap {...props} />, div);
        return {
            clear() {
                return message.clear();
            },
            show(obj: any) {
                console.log('hhshow');
                return message.show(obj);
            },
        };
    };

    public clear = () => {
        const { time } = this.props;
        // this.setState({ v: false });
        return new Promise((res, rej) => {
            if (this.state.v) {
                this.setState({ v: false }, () => setTimeout(() => res(), time));
            } else {
                res();
            }
        });
    };

    public show = async (obj: any) => {
        await this.clear();
        this.setState({
            content: obj.children,
            v: true,
        });
    };

    public render() {
        const { v, content } = this.state;
        return (
            <MessageBox clear={this.clear} visible={v}>
                Hhh <br />
                {content}
            </MessageBox>
        );
        // return <Test v={v} content={content} time={this.props.time} />;
    }
}
