
export type LogoProps = {
    children: React.ReactNode;
    className: string;
    clickHandler: void;
};
export default (props: LogoProps) => {
    const {children, ...logoProps} = props
    return (
      <div className={'logo ' + this.props.className} onClick={this.props.clickHandler}>
        <div className="circle"/>
      </div>
    )
}

