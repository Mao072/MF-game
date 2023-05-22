
        var story = [
            {
                id: '1',
                p: '你暗戀筱珮很久了。<br>他找你去聽屏東的音樂祭，而你打算趁這次機會表白。',
                option1: '單獨兩個人去看',
                option2: '找多一點朋友，比較不尷尬',
                next1: '1.1',
                next2: '1.2',
                image: 'image1.jpg' ,
                isend: false 
            },
            {
                id: '1.1',
                p: '音樂祭當天早上，在出發前你和筱珮去吃早餐。<br>結帳時，你該:',
                option1: '請他',
                option2: 'AA制',
                next1: '1.1.1',
                next2: '1.1.1',
                image: 'image2.jpg',
                isend: false 
            },
            {
                id: '1.1.1',
                p: '到了現場，你們在決定要去聽哪個樂團',
                option1: '老破麻',
                option2: '冰球樂團',
                next1: '1.1.1.1',
                next2: '1.1.1.2',
                image: 'image2.jpg',
                isend: false 
            },
            {
                id: '1.1.1.1',
                p: '聽老破麻時，原本很有氣質的筱珮在台下開圈、甩頭，你很訝異看到了她不同的一面<br>最後他跟著唱吼腔，你憋不住了，這趟旅程僅時長30分鐘<br>你失敗了',
                option1: '老破麻',
                option2: '冰球樂團',
                next1: '1.1.1.1.1',
                next2: '1.1.1.1.2',
                image: 'image2.jpg',
                isend: true 
            },
            {
                id: '1.1.1.2',
                p: '聽冰球樂團時，你感覺到氣氛很不錯。聽完天氣很熱，你們決定去帳篷遮陽休息<br>此時帳篷裡很黑，有夜盲症的你該',
                option1: '拿起手機打開手電筒',
                option2: '認命摸黑',
                next1: '1.1.1.2.1',
                next2: '1.1.1.2.2',
                image: 'image2.jpg',
                isend: false 
            },
            {
                id: '1.1.1.2.1',
                p: '很不幸的，敏感的筱珮認為你是在偷拍他，他報了警<br>--警察來了<br>--你被銬上手銬帶走了<br>--警察要求檢查你的手機<br>--發現沒東西<br>--"抱歉啦我穿比較清涼怕被偷拍"<br>你失敗了',
                option1: '拿起手機打開手電筒',
                option2: '認命摸黑',
                next1: '1.1.1.2.1',
                next2: '1.1.1.2.2',
                image: 'image2.jpg',
                isend: true 
            },
            {
                id: '1.1.1.2.2',
                p: '你們找到了一個位置坐著，才剛坐下，你就想去上廁所。<br>上廁所回來時，你隱約看到聽到有人在搭訕筱珮',
                option1: '過去充當筱珮的男友，幫他解決尷尬的場面',
                option2: '靜靜地坐下',
                next1: '1.1.1.2.2.1',
                next2: '1.1.1.2.2.2',
                image: 'image2.jpg',
                isend: false 
            },
            {
                id: '1.1.1.2.2.1',
                p: '「不好意思她有男友了」<br>空氣瞬間安靜<br>阿德:「這妳男友喔?」「不是啦白癡喔，這我同班同學啦」<br>你才明白，他只是巧遇他朋友阿德而已<br>你更明白，你只是同班同學而已，連朋友都稱不上<br>你失敗了',
                option1: '過去充當筱珮的男友，幫他解決尷尬的場面',
                option2: '靜靜地坐下',
                next1: '1.1.1.2.2.1.1',
                next2: '1.1.1.2.2.1.2',
                image: 'image2.jpg',
                isend: true
            },
            {
                id: '1.1.1.2.2.2',
                p: '你選擇靜靜地坐下，發現那是他的好朋友阿德，而且你們處的蠻來的<br>在某個空檔，阿德趁機問你「欸你喜歡筱珮齁」',
                option1: '承認喜歡他',
                option2: '承認喜歡她',
                next1: '1.1.1.2.2.2.1',
                next2: '1.1.1.2.2.2.2',
                image: 'image2.jpg',
                isend: false
            },
            {
                id: '1.1.1.2.2.2.1',
                p: '「才沒有...我喜歡@##$^...」<br>「蛤?」<br>「我說我喜歡的是你阿德啦!」你拉高分貝<br>筱珮:「...」<br>阿德「...我也是喔」阿德臉紅紅的，你很確定不是因為曬傷，而是愛意透出的紅<br>你失敗了，但也算成功吧',
                option1: '承認喜歡他',
                option2: '承認喜歡她',
                next1: '1.1.1.2.2.2.1',
                next2: '1.1.1.2.2.2.2',
                image: 'image2.jpg',
                isend: true
            },
            {
                id: '1.1.1.2.2.2.2',
                p: '「我跟你說，她單身很久了，今天就是好時機啦，你應該知道她最喜歡冰球樂團吧，你去買個周邊送她順便告白阿」',
                option1: '聽阿德的建議',
                option2: '不聽阿德的建議',
                next1: '1.1.1.2.2.2.2.1',
                next2: '1.1.1.2.2.2.2.2',
                image: 'image2.jpg',
                isend: false
            },
            {
                id: '1.1.1.2.2.2.2.1-1',
                p: '於是你買了周邊，準備向筱珮告白<br>「筱珮，其實，我喜歡你很久了...這個給你，你最喜歡的冰球樂團的周邊」<br>「蛤?我沒有喜歡冰球啊」<br>氣氛很尷尬，你很想跑走，此時你錢包掉了下來，幾張地契跟支票飄了出來<br>「欸欸我答應你，我們在一起吧」<br>你成功了',
                option1: '聽阿德的建議',
                option2: '不聽阿德的建議',
                next1: '1.1.1.2.2.2.2.1-1.1',
                next2: '1.1.1.2.2.2.2.1-1.2',
                image: 'image2.jpg',
                isend: true
            },
            {
                id: '1.1.1.2.2.2.2.1-2',
                p: '你打開錢包發現，現金不夠買周邊<br>一張發票掉落，上面寫總金額570<br>你失敗了',
                option1: '聽阿德的建議',
                option2: '不聽阿德的建議',
                next1: '1.1.1.2.2.2.2.1',
                next2: '1.1.1.2.2.2.2.2',
                image: 'image2.jpg',
                isend: true
            },
            {
                id: '1.1.1.2.2.2.2.2',
                p: '你沒有聽阿德的建議，在音樂季結束後跟筱珮表白了心意<br>「筱珮，其實，我喜歡你很久了...你願意...」<br>「蛤你有喜歡我喔...我們不是普通朋友嗎..?」你話都還沒說完就被打斷<br>你仔細回想對筱珮做的一且，買早餐、抄作業、陪她講電話、每天說早安晚安<br>你覺得這很不公平，並發誓再也不暈聽團女<br>你失敗了',
                option1: '聽阿德的建議',
                option2: '不聽阿德的建議',
                next1: '1.1.1.2.2.2.2.1',
                next2: '1.1.1.2.2.2.2.2',
                image: 'image2.jpg',
                isend: true
            },
            {
                id: '1.2',
                p: '總共三男一女，但只有你有汽車駕照<br>他們問你能不能開車載他們去',
                option1: '答應他們',
                option2: '從台北到屏東太遠了，拒絕',
                next1: '1.2.1',
                next2: '1.2.2',
                image: 'image3.jpg' ,
                isend: false 
            },
            {
                id: '1.2.1',
                p: '出發當天，你的副駕駛位置是空的<br>兩男一女在後面相談甚歡',
                option1: '擺臭臉，讓筱珮知道你吃醋了',
                option2: '裝沒看見，反正他們剛認識',
                next1: '1.2.1.1',
                next2: '1.2.1.2',
                image: 'image3.jpg' ,
                isend: false 
            },
            {
                id: '1.2.1.1',
                p: '筱珮覺得你有病，到底在歡什麼?<br>你失敗了',
                option1: '擺臭臉，讓筱珮知道你吃醋了',
                option2: '裝沒看見，反正他們剛認識',
                next1: '1.2.1.1',
                next2: '1.2.1.2',
                image: 'image3.jpg' ,
                isend: true
            },
            {
                id: '1.2.1.2',
                p: '於是一路上他們培養了很久的感情，而且你朋友還剛好是她愛的長髮廳團仔，因此他們到屏東一下車就在一起了<br>你輸的徹底。',
                option1: '擺臭臉，讓筱珮知道你吃醋了',
                option2: '裝沒看見，反正他們剛認識',
                next1: '1.2.1.1',
                next2: '1.2.1.2',
                image: 'image3.jpg' ,
                isend: true 
            },
            {
                id: '1.2.2',
                p: '拒絕他們後，你回到家發現你家的車子刮花了輪胎破了<br>刮痕上寫著:"爽啦誰叫你不載我們"',
                option1: '擺臭臉，讓筱珮知道你吃醋了',
                option2: '裝沒看見，反正他們剛認識',
                next1: '1.2.2.1',
                next2: '1.2.2.2',
                image: 'image3.jpg' ,
                isend: true 
            },
        ];

        function initializeGame() {
            showScene('1');
        }
        var previousOption = {
            value: '',
          };
        function selectOption(option) {
            var currentSceneId = document.getElementById('story').dataset.sceneId;
            var currentScene = story.find(scene => scene.id === currentSceneId);
            var nextSceneId;
        
            if (previousOption === 'AA制') {
                story[10].next1 = '1.1.1.2.2.2.2.1-1';
            } else if (previousOption === '請他') {
                story[10].next1 = '1.1.1.2.2.2.2.1-2';
            }
        
            if (option === 1) {
                nextSceneId = currentScene.next1;
                previousOption = currentScene.option1; 
            } else if (option === 2) {
                nextSceneId = currentScene.next2;
                previousOption = currentScene.option2; 
            }
        
            showScene(nextSceneId);
        }

        function showScene(sceneId) {
            var scene = story.find(scene => scene.id === sceneId);
        
            var storyElement = document.getElementById('story');
            storyElement.innerHTML = scene.p;
            storyElement.dataset.sceneId = sceneId;
        
            var imgElement = document.getElementById('img');
            imgElement.src = scene.image;
        
            var option1Button = document.getElementsByTagName('button')[0];
            var option2Button = document.getElementsByTagName('button')[1];
        
            option1Button.innerText = scene.option1;
            option2Button.innerText = scene.option2;
        
            if (scene.isend) {
                option2Button.style.display = 'none';
                option1Button.innerText = '回到首頁';
                option1Button.onclick = function() {
                    showScene('1');
                };
            } else {
                option2Button.style.display = 'inline-block';
                option1Button.onclick = function() {
                    selectOption(1);
                };
                option2Button.onclick = function() {
                    selectOption(2);
                };
            }
        }

        initializeGame();


