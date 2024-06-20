import ListBox from '../list-box/list-box';

export default function ListWrapper() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="gap-x-6 gap-y-10 xl:gap-x-8">
                    <ListBox></ListBox>
                </div>
            </div>
        </div>
    )
}