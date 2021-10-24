import AboutData from "../../data/global/about.json";
import Movie from "../../components/movie";

const Movies = () => {
    const data = AboutData.filter((d) => d.id.toLowerCase() == "movies")[0];
    return (
        <div className="movies-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <h2
                            id="projects"
                            className="title"
                            dangerouslySetInnerHTML={{
                                __html: data.title,
                            }}
                        />
                    </div>
                </div>
                {data.movies &&
                    data.movies.map((single, key) => {
                        return <Movie key={key} data={single} />;
                    })}
            </div>
        </div>
    );
};

export default Movies;
