import { Icons } from "~constants/icons";
import imageData from "~utils/data";

const AppRouter = () => {
    return (
        <div className="app_router">
            <div className="bg-[url('/public/images/SpidermanBg.png')] w-full bg-no-repeat bg-cover">
                <div className="container pt-[23px]">
                    <div className="header bg-black text-white rounded-[24px] px-[16px] py-[24px]">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-[64px]">
                                <Icons.Logo />
                                <ul className="flex items-center gap-[24px]">
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">BestGame</a></li>
                                    <li><a href="#">Values</a></li>
                                    <li><a href="#">Contact US</a></li>
                                </ul>
                            </div>
                            <button className="py-[10px] px-[24px] border-white border-2 border-solid rounded-[8px]">
                                Contact US
                            </button>
                        </div>
                    </div>
                    <div className="main flex flex-col items-center pt-[230px] pb-[83px] text-white">
                        <h1 className="text-[60px]">Game Art and Development Studio</h1>
                        <p className="max-w-[828px] text-center py-[32px]">GameNation - a global game development partner that helps developers and publishers to build games by providing custom engineering and game art services.</p>
                        <div className="flex items-center gap-[24px]">
                            <div className="flex items-center gap-[12px]">
                                <Icons.Phone /> Mobile
                            </div>
                            <div className="flex items-center gap-[12px]">
                                <Icons.GamePad /> Console
                            </div>
                            <div className="flex items-center gap-[12px]">
                                <Icons.Dekstop /> Desktop
                            </div>
                        </div>
                        <button className="py-[10px] px-[24px] border-white border-2 border-solid rounded-[8px] mt-[72px]">
                            Start a project
                        </button>
                        <Icons.Mouse className="mt-[50px]"/>
                    </div>
                </div>
            </div>
            <div className="bg-[#121212]">
                <div className="our_games container flex flex-col items-center text-white">
                    <h1 className="text-[48px]">Our Games</h1>
                    <p className="pb-[32px]">There are more than 100 games in our portfolio, 80 of them in active operation.</p>
                    <div className="flex flex-wrap gap-[36px] justify-center">
                        {imageData.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index}`} className="rounded-[12px]" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppRouter;
