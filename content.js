'use strict';
// All dialogue is authored demonstration content, not participant data or a validated intervention.
window.GUIDE_DATA = {
 version:'0.3', reviewedOn:'2026-09-20',
 sources:[
  {id:'S1',short:'ACP概念',title:'Defining Advance Care Planning for Adults: A Consensus Definition From a Multidisciplinary Delphi Panel',citation:'Sudore RL, et al. J Pain Symptom Manage. 2017;53(5):821–832.e1.',type:'专家共识',url:'https://doi.org/10.1016/j.jpainsymman.2016.12.331',supports:'ACP包括理解与交流个人对未来医疗照护的价值、目标及偏好。',limits:'概念依据，不是本网页话术的效果证据。'},
  {id:'S2',short:'亲子沟通研究',title:'Intergenerational communication about advance care planning between older adults and their adult children: a qualitative dyadic study',citation:'Lin TC, Kao CY, Fan SY. BMC Geriatrics. 2026;26:601.',type:'质性研究 · 全文',url:'https://link.springer.com/article/10.1186/s12877-026-07375-0',supports:'9对亲子的访谈涉及日常渐进交流、相互理解和家庭关系。',limits:'中国台湾地区老年父母与成年子女，不能直接推及大陆大学生；不验证本网页回应。'},
  {id:'S3',short:'子女的沟通两难',title:'Dilemmas Adult Children Face in Discussing End-of-Life Care Preferences with Their Parents',citation:'Roscoe LA, Barrison P. Health Communication. 2019;34(14):1788–1794.',type:'情境研究 · 摘要',url:'https://pubmed.ncbi.nlm.nih.gov/30375899/',supports:'75名成年子女对假设情境的回答呈现直接表达与照顾父母感受等两难。',limits:'假设回答不是实际行为；本次仅核实摘要。'},
  {id:'S4',short:'高校年轻人研究',title:'The Influence of Family Communication Patterns in Advance Care Planning: A Young Adult’s Perspective',citation:'Murphy JL, et al. Research and Theory for Nursing Practice. 2025，在线发表. DOI: 10.1891/RTNP-2025-0015.',type:'混合方法 · 摘要',url:'https://pubmed.ncbi.nlm.nih.gov/40854678/',supports:'39名美国高校年轻人的量表与焦点小组资料，关注家庭沟通模式。',limits:'文化和教育背景不同；本次仅核实摘要，不能据此给家庭分类或评分。'},
  {id:'S5',short:'沟通材料开发',title:'“At the End I Have a Say”: Engaging the Chinese Community in Advance Care Planning',citation:'Nouri S, et al. J Pain Symptom Manage. 2023;66(5):551–560.e1.',type:'社区参与研究 · 全文',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC10593504/',supports:'通过华人社区焦点小组与共同设计形成沟通材料，为成果转化提供思路。',limits:'美国华人社区项目；其活动评价结果不能用来证明本网页有效。'},
  {id:'S6',short:'对话入门指南',title:'Your Conversation Starter Guide',citation:'The Conversation Project / Institute for Healthcare Improvement. 2021.',type:'实践资源 · 全文',url:'https://theconversationproject.org/conversationstarterguide/',supports:'参考倾听、分次交流、允许改变想法等沟通原则；本页使用独立编写的示例。',limits:'实践资源，不是本项目的干预证据；美国法律文件与代理人安排不直接适用于本项目。',chinese:'https://theconversationproject.org/wp-content/uploads/2021/01/TCP-ConversationStartGuide-Chinese.pdf'}
 ],
 scenarios:[
  {id:'comfort',tag:'照护与痛苦',title:'父母说“不想太遭罪”',quote:'“以后真病得很重，我不想一直受罪。”',note:'先问对方指的是什么经历或状态，而不是立即推断某项治疗要不要做。',opening:'“你说的‘受罪’，具体是指什么？如果你愿意，我想听听。”',follow:'“如果真遇到那样的情况，你最希望我们先了解什么？”',avoid:'不要把“不想受罪”直接解释为拒绝所有治疗。',refs:['S1','S2']},
  {id:'burden',tag:'家人负担',title:'父母说“不想拖累你们”',quote:'“以后要是生重病，我不想给你们添太多麻烦。”',note:'“麻烦”可能包含不同顾虑。可以先听对方说明，不替他们确定担心的是费用、照顾还是其他事情。',opening:'“你说怕给我们添麻烦，我想知道，你最担心的是哪件事？”',follow:'“除了这些担心，对于自己的照护，你还有什么特别在意的？”',avoid:'不用立即承诺“一切都没问题”，也不要据此替父母决定减少治疗。',refs:['S2','S3']},
  {id:'involvement',tag:'谁来参与',title:'父母希望我帮着作决定',quote:'“以后我要是说不了话，你帮我跟医生商量。”',note:'可以先了解父母希望谁参与、希望对方理解什么。日常托付不等于已完成正式授权或决定。',opening:'“我想先了解你的想法。如果真要一起商量，你最希望我替你说明什么？”',follow:'“除了我，你还希望谁了解这些想法、一起参与讨论？”',avoid:'不要承诺独自决定所有事情，也不把家人的意见当作父母的意愿。',refs:['S1','S2','S3']},
  {id:'experience',tag:'由他人谈到自己',title:'亲友患病，让父母想到自己',quote:'“看到亲戚这样住院，我也会想自己以后希望怎么照顾。”',note:'重点是父母对自己照护的想法。别人的经历可以是话题起点，但两个人的病情和选择未必相同。',opening:'“这件事让你想到自己的哪些事情？我愿意听听。”',follow:'“对于你自己，哪些照护上的事情是你最在意的？”',avoid:'不根据亲友的一次经历，推断相同治疗对父母的结果。',refs:['S2','S6']},
  {id:'unclear',tag:'含义不明确',title:'像随口一说，我拿不准',quote:'“以后要是不行了，差不多就算了吧。”',note:'语气轻松或含糊，不能单独说明父母是否认真。可以确认含义，也允许对方说只是感慨。',opening:'“你刚才那句话，我还不太明白。你愿意说说具体指什么吗？”',follow:'“你是想说说当下的感受，还是希望我记住某些照护上的想法？”',avoid:'不把含糊表达直接当作医疗指示，也不先认定父母只是开玩笑。',refs:['S1','S2']},
  {id:'return',tag:'重新接起话题',title:'上次没接话，想再问问',quote:'父母以前谈过自己未来的医疗照护，当时我不知道怎么回应。',note:'回忆可能不完整，父母的想法也可能变化。先询问现在是否方便，再请对方澄清。',opening:'“你上次提到以后生病的事，我当时不知道怎么接。现在方便说说吗？”',follow:'“我记得你当时大概说……我有没有记错？你现在怎么看？”',avoid:'不把记忆中的近似转述当作逐字原话，也不要求父母坚持原来的想法。',refs:['S2','S6']}
 ],
 concerns:[
  {id:'meaning',title:'拿不准父母的意思',detail:'是认真表达，还是一时感慨？',principle:'先确认含义，暂不作判断',advice:'可以用自己的话复述，再请父母确认。语气、表情和以往相处经验可以帮助理解，但不能代替对方的说明。',prefix:'',refs:['S2']},
  {id:'hurt',title:'怕一问就让父母难受',detail:'想关心，又怕话题太沉重。',principle:'先确认是否愿意谈',advice:'先问现在是否方便、是否愿意说，再决定谈到哪一步。对方表达不适或不愿意时，停止追问。',prefix:'“这件事聊起来可能不容易。你现在愿意说说吗？”',refs:['S3','S6']},
  {id:'medical',title:'不懂具体治疗，怕说错',detail:'涉及抢救、插管等，我不清楚。',principle:'先听在意什么，治疗问题再请教',advice:'不需要先成为医学专家才能倾听。可以坦诚说明自己不了解某项治疗，把具体病情、效果和风险的问题留给医护人员解释。',prefix:'“具体治疗我还不太懂，但我想先听听你在意的事情。”',refs:['S1','S2']},
  {id:'different',title:'我和父母想的不一样',detail:'很想挽留，也担心会争起来。',principle:'可以表达不同意见，不急着说服',advice:'区分“我听到了你的想法”和“我们已经达成一致”。可以说自己的感受，也让父母说明理由；一次谈话不必解决分歧。',prefix:'“我听到后有些难接受，但我不想替你下结论。我想先听听你的理由。”',refs:['S3','S6']},
  {id:'family',title:'怕其他家人不理解',detail:'担心被说不孝，或承担全部责任。',principle:'先了解父母希望谁参与',advice:'家庭分工和相处方式可能影响谈话。可以先问父母愿意与谁交流，不擅自向其他家人转述，也不独自承诺医疗安排。',prefix:'“这些想法，你愿意让家里哪些人一起了解？”',refs:['S2','S3','S4']},
  {id:'notready',title:'我自己还没准备好',detail:'一想到这些，就很难继续。',principle:'你也可以选择暂停',advice:'不必勉强自己立即讨论。可以表达需要时间，也不必当场约定什么时候继续；这不等于不关心父母。',prefix:'“这件事我也有些难受，需要一点时间想想。我们先停一下，好吗？”',refs:['S3','S6']},
  {id:'none',title:'没有明显顾虑，先看看',detail:'我愿意听，也想了解其他可能。',principle:'保持开放，不必寻找一个障碍',advice:'如果沟通自然顺利，可以顺着父母的表达倾听。没有顾虑、没有追问或暂时不需要帮助，也都是可能的情况。',prefix:'',refs:['S2']}
 ],
 reactions:[
  {id:'willing',title:'愿意继续说',quote:'“其实我最担心的是……”',action:'沿着对方最在意的内容听下去',reply:'“你可以慢慢说，我想多了解一点。”',advice:'不急着逐条提问。听完一段后，可以复述要点，请父母确认你的理解。',refs:['S2','S6']},
  {id:'vague',title:'仍然含糊，或沉默',quote:'“到时候再看吧……”',action:'给对方留出空间',reply:'“可以先不想清楚。你想说的时候，我愿意听。”',advice:'不把沉默等同于同意、拒绝或误解。对方愿意时再澄清；如果没有回应，就不继续追问。',refs:['S2','S6']},
  {id:'stop',title:'明确说不想谈',quote:'“今天不想说这些，先别问了。”',action:'尊重暂停，不追加问题',reply:'“好，我们先不聊了。”',advice:'结束这个话题，回到双方舒适的活动或交流。不要求对方解释理由，也不安排“必须完成”的下一次谈话。',refs:['S6']},
  {id:'emotional',title:'显得难过或不安',quote:'说着说着，父母情绪明显低落。',action:'先照顾感受，再决定是否继续',reply:'“我们可以先停一停。你希望我陪着，还是先安静一会儿？”',advice:'不要推断情绪背后的原因。可以询问对方当下需要什么；不急着用保证或劝说消除难过。',refs:['S3','S6']},
  {id:'treatment',title:'问到具体医疗选择',quote:'“那真到那个时候，到底要不要插管？”',action:'把具体治疗问题交给专业讨论',reply:'“这个要结合当时的病情，我不能替你判断。你愿意时，我们可以一起问医生。”',advice:'可以准备向医生询问：这种治疗的目的是什么、可能获益和风险是什么、有哪些选择，以及这些选择与父母在意的事如何相关。网页不回答该做或不该做某项治疗。',refs:['S1']},
  {id:'changed',title:'和上次的想法不同',quote:'“现在我又觉得，可能不是之前那样。”',action:'了解现在的想法，不用旧话约束',reply:'“想法可以变化。你愿意说说现在怎么看吗？”',advice:'不说“你上次明明答应过”。如果父母愿意，再了解哪些事情发生了变化；不要把旧表达当作不变的决定。',refs:['S1','S6']},
  {id:'unknown',title:'还不确定，只作预演',quote:'我还没有回应，或不想假设父母的反应。',action:'保留不确定，不预测父母的反应',reply:'“你现在方便聊一会儿吗？不方便也没关系。”',advice:'可以先看几种不同分支。网页不预测真实反应，也不要求你回家试用后才能继续。',refs:['S6']}
 ],
 faqs:[
  {q:'父母谈起这些，就说明已经作好医疗决定了吗？',a:'不一定。日常表达可能是在说感受、顾虑或初步偏好。需要先了解语境和具体含义；一句话不能直接替代结合病情的医疗讨论。',refs:['S1','S2']},
  {q:'是不是一定要追问、把话题继续下去？',a:'不必。是否继续取决于双方意愿和当下状态。本项目不把暂停、沉默或没有追问一律视为失败，也不要求使用者回家完成谈话。',refs:['S6']},
  {q:'完全没有相关经历，可以使用吗？',a:'可以把网页作为情境预演，但预演不能当作亲历事件。你的大创研究主要招募能描述父母实际表达经历的同学，网页使用与研究招募是两件事。',refs:[]},
  {q:'只谈葬礼、遗产或一般死亡观，也属于这里的情境吗？',a:'按本项目的范围，仅谈这些内容而未涉及父母自身未来医疗照护，不作为核心事件。网页情境聚焦未来重病或无法表达时的照护偏好、价值与决策参与。',refs:[]},
  {q:'医学生是不是可以直接解释所有治疗问题？',a:'专业背景不等于掌握父母具体病情。涉及治疗适应情况、获益和风险，应由了解实际病情的医护人员解释；学生可以帮助整理问题、陪伴交流。',refs:['S1']},
  {q:'网页中的话术经过验证了吗？',a:'尚未。这些是结合文献原则和选题范围独立编写的演示内容，不是量表、访谈发现或受访者原话。需要在研究完成后按主题修订，并由指导教师审核；不能据此声称改善了沟通效果。',refs:[]},
  {q:'会保存我的选择，或收集家庭健康信息吗？',a:'网页不设置研究问卷、健康信息输入或选择记录上传。选择仅保留在当前页面内，刷新后清空。只有你主动复制、下载或打印，才会产生由你保管的卡片。',refs:[]},
  {q:'可以在正式访谈前让受访者学习网页吗？',a:'不建议把网页作为访谈前的统一教学。选题报告要求先听参与者按自己的理解叙述，避免提示“正确回应”。如果参与者已看过，应记录这一情况，并区分当时想法与事后理解。',refs:[]}
 ]
};
