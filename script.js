// HTML 요소들을 가져옵니다.
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d', { willReadFrequently: true });
const loader = document.getElementById('loader');
const filterBtn = document.getElementById('filter-btn');
const captureBtn = document.getElementById('capture-btn');
const resultContainer = document.getElementById('result-container');
const photo = document.getElementById('photo');
const saveBtn = document.getElementById('save-btn');
const shareBtn = document.getElementById('share-btn');
const PRECALCULATED_TARGET_LANDMARKS = [
  {
    "_x": 0.018469039350748062,
    "_y": 0.20128418505191803
  },
  {
    "_x": 0.02899688482284546,
    "_y": 0.3217613399028778
  },
  {
    "_x": 0.05195078253746033,
    "_y": 0.4361622631549835
  },
  {
    "_x": 0.0774972140789032,
    "_y": 0.5336145758628844
  },
  {
    "_x": 0.11644960194826126,
    "_y": 0.6469188928604126
  },
  {
    "_x": 0.17431694269180298,
    "_y": 0.7446553111076355
  },
  {
    "_x": 0.24348720908164978,
    "_y": 0.8223016262054443
  },
  {
    "_x": 0.3348143696784973,
    "_y": 0.9010041356086731
  },
  {
    "_x": 0.47183212637901306,
    "_y": 0.941477358341217
  },
  {
    "_x": 0.6095604300498962,
    "_y": 0.9028378129005432
  },
  {
    "_x": 0.701266884803772,
    "_y": 0.8307549953460693
  },
  {
    "_x": 0.7741647958755493,
    "_y": 0.7579382658004761
  },
  {
    "_x": 0.8368607759475708,
    "_y": 0.6586186289787292
  },
  {
    "_x": 0.8816221952438354,
    "_y": 0.5461737513542174
  },
  {
    "_x": 0.9093626141548157,
    "_y": 0.4435631334781647
  },
  {
    "_x": 0.9359046220779419,
    "_y": 0.33167141675949097
  },
  {
    "_x": 0.9489135146141052,
    "_y": 0.21125803887844086
  },
  {
    "_x": 0.08878099173307419,
    "_y": 0.1430642008781433
  },
  {
    "_x": 0.14562036097049713,
    "_y": 0.11534443497657776
  },
  {
    "_x": 0.2198875993490219,
    "_y": 0.12017582356929779
  },
  {
    "_x": 0.29062366485595703,
    "_y": 0.13829104602336884
  },
  {
    "_x": 0.3522797226905823,
    "_y": 0.16546911001205444
  },
  {
    "_x": 0.5977082252502441,
    "_y": 0.1644631326198578
  },
  {
    "_x": 0.660705029964447,
    "_y": 0.13822942972183228
  },
  {
    "_x": 0.7304582595825195,
    "_y": 0.1177423745393753
  },
  {
    "_x": 0.8094574213027954,
    "_y": 0.11390749365091324
  },
  {
    "_x": 0.866176962852478,
    "_y": 0.1431380808353424
  },
  {
    "_x": 0.4738434851169586,
    "_y": 0.28793373703956604
  },
  {
    "_x": 0.470211386680603,
    "_y": 0.3747031092643738
  },
  {
    "_x": 0.46653345227241516,
    "_y": 0.45982491970062256
  },
  {
    "_x": 0.46515703201293945,
    "_y": 0.533616006374359
  },
  {
    "_x": 0.39140281081199646,
    "_y": 0.5601261854171753
  },
  {
    "_x": 0.42485907673835754,
    "_y": 0.5759797096252441
  },
  {
    "_x": 0.46824848651885986,
    "_y": 0.5856383442878723
  },
  {
    "_x": 0.5121799111366272,
    "_y": 0.5735987424850464
  },
  {
    "_x": 0.54863041639328,
    "_y": 0.5636341571807861
  },
  {
    "_x": 0.17607367038726807,
    "_y": 0.24406594038009644
  },
  {
    "_x": 0.22105519473552704,
    "_y": 0.2328001707792282
  },
  {
    "_x": 0.2842285931110382,
    "_y": 0.23454637825489044
  },
  {
    "_x": 0.3419843912124634,
    "_y": 0.2676513195037842
  },
  {
    "_x": 0.28827688097953796,
    "_y": 0.2841794192790985
  },
  {
    "_x": 0.22150872647762299,
    "_y": 0.2764914929866791
  },
  {
    "_x": 0.6071608066558838,
    "_y": 0.26980146765708923
  },
  {
    "_x": 0.6641948223114014,
    "_y": 0.23541733622550964
  },
  {
    "_x": 0.7313558459281921,
    "_y": 0.2344401329755783
  },
  {
    "_x": 0.7757794857025146,
    "_y": 0.25424307584762573
  },
  {
    "_x": 0.7303178310394287,
    "_y": 0.28406891226768494
  },
  {
    "_x": 0.6630159020423889,
    "_y": 0.28288304805755615
  },
  {
    "_x": 0.3127422034740448,
    "_y": 0.6902707815170288
  },
  {
    "_x": 0.3682498633861542,
    "_y": 0.6790164709091187
  },
  {
    "_x": 0.43001189827919006,
    "_y": 0.6678789854049683
  },
  {
    "_x": 0.4673128128051758,
    "_y": 0.6752905249595642
  },
  {
    "_x": 0.5032069683074951,
    "_y": 0.6648381948471069
  },
  {
    "_x": 0.5738643407821655,
    "_y": 0.684909999370575
  },
  {
    "_x": 0.6376842856407166,
    "_y": 0.6959909796714783
  },
  {
    "_x": 0.5740351676940918,
    "_y": 0.7380145788192749
  },
  {
    "_x": 0.5214974880218506,
    "_y": 0.7618542313575745
  },
  {
    "_x": 0.4673660695552826,
    "_y": 0.7687545418739319
  },
  {
    "_x": 0.41974878311157227,
    "_y": 0.761971652507782
  },
  {
    "_x": 0.3660707175731659,
    "_y": 0.7388129830360413
  },
  {
    "_x": 0.32507583498954773,
    "_y": 0.692738950252533
  },
  {
    "_x": 0.4191727340221405,
    "_y": 0.7029462456703186
  },
  {
    "_x": 0.4682840406894684,
    "_y": 0.7039340734481812
  },
  {
    "_x": 0.515961766242981,
    "_y": 0.7035773992538452
  },
  {
    "_x": 0.620864748954773,
    "_y": 0.695415735244751
  },
  {
    "_x": 0.5179116129875183,
    "_y": 0.7091049551963806
  },
  {
    "_x": 0.46984830498695374,
    "_y": 0.712969958782196
  },
  {
    "_x": 0.4233320951461792,
    "_y": 0.7099727392196655
  }
];

let isFilterOn = false;
let targetFace = {
    landmarks: PRECALCULATED_TARGET_LANDMARKS,
};
const WARP_STRENGTH = 0.7; // 변형 강도를 약간 올렸습니다.

// 얼굴 형태를 결정하는 주요 랜드마크 인덱스 (68개 대신 27개만 사용해 성능 개선)
const KEY_LANDMARK_INDICES = [
    // 턱선 (Jawline)
    0, 2, 4, 6, 8, 10, 12, 14, 16,
    // 눈썹 (Eyebrows)
    17, 21, 22, 26,
    // 코 (Nose)
    27, 30, 31, 33, 35,
    // 눈 (Eyes)
    36, 39, 42, 45,
    // 입 (Mouth)
    48, 51, 54, 57
];

// AI 모델 로딩
async function loadModels() {
    const MODEL_URL = './models';
    try {
        await Promise.all([
            faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        ]);
    } catch (error) {
        console.error("모델 로딩 실패:", error);
    }
}

// 웹캠 시작
async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        video.srcObject = stream;
        video.addEventListener('loadedmetadata', () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
        });
    } catch (error) {
        console.error("웹캠 시작 실패:", error);
    }
}

function liquify(sourceImageData, userLandmarks) {
    const { width, height } = sourceImageData;
    const destImageData = new ImageData(width, height);
    const sourcePixels = sourceImageData.data;
    const destPixels = destImageData.data;

    const userPoints = KEY_LANDMARK_INDICES.map(i => userLandmarks.positions[i]);

    const targetPoints = KEY_LANDMARK_INDICES.map(i => {
        const p = targetFace.landmarks[i]; 
        const userFaceBox = userLandmarks.box;

        // ✅ 최종 수정: p.x -> p._x, p.y -> p._y 로 변경
        const originalTargetX = p._x * userFaceBox.width + userFaceBox.x;
        const originalTargetY = p._y * userFaceBox.height + userFaceBox.y;
        
        const mirroredTargetX = canvas.width - originalTargetX;

        return new faceapi.Point(mirroredTargetX, originalTargetY);
    });

    const displacementVectors = userPoints.map((p, i) => ({
        x: (targetPoints[i].x - p.x) * WARP_STRENGTH,
        y: (targetPoints[i].y - p.y) * WARP_STRENGTH,
    }));
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let totalDx = 0;
            let totalDy = 0;
            let totalWeight = 0;
            for (let i = 0; i < userPoints.length; i++) {
                const landmark = userPoints[i];
                const distSq = Math.pow(x - landmark.x, 2) + Math.pow(y - landmark.y, 2);
                const weight = 1 / (distSq + 1e-6);
                totalDx += displacementVectors[i].x * weight;
                totalDy += displacementVectors[i].y * weight;
                totalWeight += weight;
            }
            const dx = totalDx / totalWeight;
            const dy = totalDy / totalWeight;
            const sourceX = Math.round(x - dx);
            const sourceY = Math.round(y - dy);
            const destIndex = (y * width + x) * 4;
            if (sourceX >= 0 && sourceX < width && sourceY >= 0 && sourceY < height) {
                const sourceIndex = (sourceY * width + sourceX) * 4;
                destPixels[destIndex] = sourcePixels[sourceIndex];
                destPixels[destIndex + 1] = sourcePixels[sourceIndex + 1];
                destPixels[destIndex + 2] = sourcePixels[sourceIndex + 2];
                destPixels[destIndex + 3] = sourcePixels[sourceIndex + 3];
            } else {
                destPixels[destIndex] = sourcePixels[destIndex];
                destPixels[destIndex + 1] = sourcePixels[destIndex + 1];
                destPixels[destIndex + 2] = sourcePixels[destIndex + 2];
                destPixels[destIndex + 3] = sourcePixels[destIndex + 3];
            }
        }
    }
    return destImageData;
}


// 이 코드로 기존 detectFace 함수를 완전히 교체하세요.
async function detectFace() {
    context.save();
    context.scale(-1, 1);
    context.translate(-canvas.width, 0);

    if (!isFilterOn) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
    } else {
        const userDetections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions({ scoreThreshold: 0.4 }))
            .withFaceLandmarks();

        if (userDetections && targetFace.landmarks) {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // *** 여기가 핵심 수정 사항 1 ***
            // landmarks 객체 대신, 얼굴 탐지 영역(box) 정보를 명시적으로 가져옵니다.
            const { box } = userDetections.detection;
            const landmarksForLiquify = {
                positions: userDetections.landmarks.positions.map(
                    p => new faceapi.Point(canvas.width - p.x, p.y)
                ),
                // 정확한 얼굴 영역(box) 정보를 함께 객체로 만들어 전달합니다.
                box: {
                    width: box.width,
                    height: box.height,
                    x: box.x,
                    y: box.y
                }
            };

            const sourceImageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const warpedImageData = liquify(sourceImageData, landmarksForLiquify);
            
            context.putImageData(warpedImageData, 0, 0);

            // Warp effect applied 메시지는 이제 지워도 좋습니다.
            // console.log("Warp effect applied at:", new Date().toLocaleTimeString());

        } else {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
        }
    }

    context.restore();
    requestAnimationFrame(detectFace);
}


// --- 나머지 코드는 기존과 동일 ---
filterBtn.addEventListener('click', () => {
    isFilterOn = !isFilterOn;
    filterBtn.textContent = isFilterOn ? '필터 끄기' : '필터 켜기';
    filterBtn.classList.toggle('active', isFilterOn);
});

captureBtn.addEventListener('click', () => {
    const dataUrl = canvas.toDataURL('image/jpeg');
    photo.src = dataUrl;
    saveBtn.href = dataUrl;
    saveBtn.download = `warped_face_${Date.now()}.jpg`;
    resultContainer.classList.remove('hidden');
});

shareBtn.addEventListener('click', async () => {
    try {
        const response = await fetch(photo.src);
        const blob = await response.blob();
        const file = new File([blob], `warped_face_${Date.now()}.jpg`, { type: 'image/jpeg' });
        
        if (navigator.share) {
            await navigator.share({ files: [file] });
        } else {
            alert('이 브라우저에서는 공유하기 기능을 지원하지 않습니다.');
        }
    } catch (error) {
        console.error('공유하기 실패:', error);
    }
});

async function main() {
    loader.textContent = "AI 모델 로딩 중...";
    await loadModels();
    // 분석 단계가 사라지고 바로 웹캠 시작으로 넘어갑니다.
    loader.textContent = "웹캠 시작 중...";
    await startWebcam();
    video.addEventListener('play', () => {
        loader.classList.add('hidden');
        detectFace();
    });
}

main();