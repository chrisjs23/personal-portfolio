import clueless1 from '../assets/images/Clueless.png'
import clueless2 from '../assets/images/Clueless2.png'
import clueless3 from '../assets/images/all-character-cards.png'
import triviagpt1 from '../assets/images/triviagpt1.png'
import triviagpt2 from '../assets/images/triviagpt2.png'
import platformer from '../assets/images/platformer.png'

const projects = [
    {
        name: 'Complex Systems: Kuramoto Associative Memory',
        technologies: 'Python / NumPy / matplotlib',
        date: 'July 2026',
        description: [
            'Implemented a 64-oscillator associative memory network with phase configurations encoding 8×8 binary patterns \
                and Hebbian coupling storing target memories',
            'Ran repeated simulations across coupling strength and input corruption levels, measuring pixel accuracy, pattern overlap, \
                exact retrieval rate, and retrieval rate over time',
            'Visualized successful, partial, and failed retrieval cases to demonstrate how collective synchronization reconstructs \
                corrupted patterns and where recovery breaks down'                
        ]
    },
    {
        name: 'Deep Learning: BERT Robustness Under Domain Shift',
        technologies: 'Python / PyTorch / Hugging Face Transformers',
        date: 'April 2026',
        description: [
            'Finetuned a BERT sentiment classifier on balanced IMDb movie reviews and evaluated its ability to generalize \
                        to Amazon product reviews with different vocabulary, structure, and domain conventions',
            'Compared full finetuning with layer freezing, increased regularization, and synonym-based data augmentation \
                        using accuracy, F1 score, and expected calibration error',
            'Achieved 92.19% accuracy on IMDb and 91.69% on Amazon, finding that baseline BERT transferred well across \
                        domains while heavier layer freezing improved calibration at a modest cost to predictive performance'
        ]
    },
    {
        name: 'Natural Language Processing: ADHD Discourse Detection',
        technologies: 'Python / pandas / scikit-learn',
        date: 'December 2025',
        description: [
            'Built a binary text classification system to distinguish ADHD vs. control Reddit posts using \
                        TF-IDF + Linear SVM and MiniLM sentence embeddings + Linear SVM',
            'Designed a controlled evaluation with stratified train/validation/test splits and macro-F1 \
                        scoring, ensuring fair comparison across models',
            'Conducted a keyword-masking robustness analysis, showing that contextual embeddings \
                        degrade less than lexical models when explicit ADHD terms are removed, indicating stronger \
                        semantic generalization'
        ]
    },
    {
        name: 'Reinforcement Learning: Racetrack Control',
        technologies: 'Python / NumPy / pandas',
        date: 'December 2025',
        description: [
            'Implemented Value Iteration, Q-Learning, and SARSA in a stochastic racetrack environment with \
                         velocity-based state space and collision detection',
            'Designed experiments across multiple track geometries and crash penalties to analyze on- vs. off-policy learning behavior',
            'Demonstrated safety-performance tradeoffs, showing risk-seeking Q-Learning vs. conservative SARSA under harsh penalties'
        ]
    },
    {
        name: 'Neural Networks & Autoencoder Pretraining',
        technologies: 'Python / NumPy / pandas',
        date: 'November 2025',
        description: [
            'Implemented linear/logistic regression, feedforward neural networks, and autoencoder-pretrained models from scratch',
            'Compared architectures on classification and regression tasks using 5x2 cross-validation',
            'Showed that autoencoder pretraining improves generalization on noisy, nonlinear regression problems'
        ]
    },
    {
        name: 'Decision Trees with Reduced-Error Pruning',
        technologies: 'Python / NumPy / pandas',
        date: 'October 2025',
        description: [
            'Implemented classification and regression trees using gain ratio and MSE split criteria',
            'Added reduced-error pruning with held-out validation to control overfitting and improve generalization',
            'Achieved large reductions in tree depth with little or no loss in accuracy, and improved MSE on noisy regression tasks'
        ]
    },
    {
        name: 'Nonparametric Models: k-Nearest Neighbors',
        technologies: 'Python / NumPy / pandas',
        date: 'September 2025',
        description: [
            'Built an end-to-end KNN pipeline with normalization, categorical distances (VDM), kernel regression, and null baselines',
            'Implemented edited nearest neighbor pruning, significantly reducing dataset size with minimal accuracy loss',
            'Evaluated models using 5x2 cross-validation across six classification and regression datasets'
        ]
    },
    {
        name: 'Clue-Less',
        technologies: 'Godot 4 / C#',
        date: 'January - March 2025',
        description: [
            'Designed a simplified version of the classic board game CLUE',
            'Developed intuitive gameplay systems and custom assets with fresh but familiar themes',
            'Utilized networking libraries to create an engaging multiplayer experience'
        ],
        images: [
            clueless1,
            clueless2,
            clueless3
        ]
    },
    {
        name: 'TRIVIAGPT',
        technologies: 'Java / libGDX / OpenAI API / MongoDB',
        date: 'June - August 2023',
        description: [
            'Architected a full-stack trivia game that generates dynamic questions via OpenAI API, increasing replayability 5x',
            'Built RESTful micro-service with MongoDB backend for game-state and player data',
            'Managed GitHub feature-branch workflow and code reviews to uphold project quality and reduce defects'
        ],
        images: [
            triviagpt1,
            triviagpt2
        ]
    },
    {
        name: 'Personal Media Server',
        technologies: 'Jellyfin / MakeMKV / Linux (Raspberry Pi) / Bash',
        date: 'August 2025',
        description: [
            'Built a self-hosted streaming stack with Jellyfin on a Raspberry Pi to consolidate outdated media',
            'Crafted Bash pipeline to automate disc handling: ripping with MakeMKV, converting to H.264, and \
                moving/organizing outputs into Jellyfin-friendly library structure',
            'Leveraged Linux CLI tools to implement logging, manage storage mounts/permissions, and automatic cleanup of empty \
            work directories'
        ]
    },
    {
        name: '2-D Platformer Prototype',
        technologies: 'Godot 4 / GDScript',
        date: 'November - December 2024',
        description: [
            'Developed custom physics, collision detection, and state-machine-driven gameplay loop in Godot 4'
        ],
        images :[
            platformer
        ]
    },
    {
        name: 'Custom Compiler',
        technologies: 'C / Flex / Bison',
        date: 'March - May 2023',
        description: [
            'Designed lexical analyzer and LL parser for a bespoke language; emitted LLVM-compatible byte-code \
            and achieved >95% automated test-suite pass rate',
            'Implemented symbol, literal, and error tables to support semantic analysis and detailed compiler diagnostics'
        ]
    }
]

export default projects