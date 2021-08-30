
import './App.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    searchQuery: '',
    pageNumber: 1,
    images: [],
    status: Status.IDLE,
    morePageImages: false,
    error: null,
  };

  componentDidUpdate (prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;

    if (
      prevState.searchQuery !== this.state.searchQuery &&
      this.state.searchQuery !== ''
    ) {
      this.setState({ status: Status.PENDING, pageNumber: 1 });
      this.getImages(searchQuery, pageNumber);
      }
  }
  getImages = (searchQuery, pageNumber) => {
    fetchImages(searchQuery, pageNumber).then((images) => {
      this.setState({ images: images.hits, status: Status.RESOLVED });

      if (images.total === 0) {
        this.setState({
          status: Status.REJECTED,
          error: 'ups, no images!',
        });
        return;
      }
      
    });
  }
}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
