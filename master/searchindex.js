Search.setIndex({docnames:["api","api/datman","api/datman.config","api/datman.dashboard","api/datman.exceptions","api/datman.fs_log_scraper","api/datman.header_checks","api/datman.scan","api/datman.scan_list","api/datman.scanid","api/datman.utils","api/datman.xnat","changes","index","installation","links","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["api.rst","api/datman.rst","api/datman.config.rst","api/datman.dashboard.rst","api/datman.exceptions.rst","api/datman.fs_log_scraper.rst","api/datman.header_checks.rst","api/datman.scan.rst","api/datman.scan_list.rst","api/datman.scanid.rst","api/datman.utils.rst","api/datman.xnat.rst","changes.rst","index.rst","installation.rst","links.rst","usage.rst"],objects:{"":{datman:[1,0,0,"-"]},"datman.config":{TagInfo:[2,1,1,""],config:[2,1,1,""],study_required:[2,4,1,""]},"datman.config.TagInfo":{get:[2,2,1,""],keys:[2,2,1,""],series_map:[2,2,1,""]},"datman.config.config":{get_key:[2,2,1,""],get_path:[2,2,1,""],get_sites:[2,2,1,""],get_study_base:[2,2,1,""],get_study_tags:[2,2,1,""],get_tags:[2,2,1,""],get_xnat_projects:[2,2,1,""],install_config:[2,3,1,""],load_yaml:[2,2,1,""],map_xnat_archive_to_project:[2,2,1,""],set_study:[2,2,1,""],study_config:[2,3,1,""],study_config_file:[2,3,1,""],study_name:[2,3,1,""],system_config:[2,3,1,""]},"datman.dashboard":{add_scan:[3,4,1,""],add_session:[3,4,1,""],add_subject:[3,4,1,""],dashboard_required:[3,4,1,""],filename_required:[3,4,1,""],get_bids_scan:[3,4,1,""],get_bids_subject:[3,4,1,""],get_default_user:[3,4,1,""],get_project:[3,4,1,""],get_scan:[3,4,1,""],get_session:[3,4,1,""],get_study_subjects:[3,4,1,""],get_subject:[3,4,1,""],scanid_required:[3,4,1,""],set_study_status:[3,4,1,""]},"datman.exceptions":{ConfigException:[4,5,1,""],DashboardException:[4,5,1,""],ExportException:[4,5,1,""],InputException:[4,5,1,""],MetadataException:[4,5,1,""],ParseException:[4,5,1,""],UndefinedSetting:[4,5,1,""],XnatException:[4,5,1,""]},"datman.exceptions.XnatException":{message:[4,3,1,""],session:[4,3,1,""],study:[4,3,1,""]},"datman.fs_log_scraper":{FSLog:[5,1,1,""],check_diff:[5,4,1,""],choose_standard_sub:[5,4,1,""],make_standards:[5,4,1,""],scrape_logs:[5,4,1,""],verify_standards:[5,4,1,""]},"datman.fs_log_scraper.FSLog":{get_args:[5,2,1,""],get_date:[5,2,1,""],get_kernel:[5,2,1,""],get_niftis:[5,2,1,""],get_subject:[5,2,1,""],parse_recon_done:[5,2,1,""],read_log:[5,2,1,""]},"datman.header_checks":{check_bvals:[6,4,1,""],compare_headers:[6,4,1,""],construct_diffs:[6,4,1,""],find_bvals:[6,4,1,""],handle_diff:[6,4,1,""],parse_file:[6,4,1,""],read_json:[6,4,1,""],remove_fields:[6,4,1,""],write_diff_log:[6,4,1,""]},"datman.scan":{DatmanNamed:[7,1,1,""],Scan:[7,1,1,""],Series:[7,1,1,""]},"datman.scan.Scan":{get_tagged_dcm:[7,2,1,""],get_tagged_nii:[7,2,1,""]},"datman.scan_list":{ScanEntryABC:[8,1,1,""],generate_scan_list:[8,4,1,""],get_scan_list_contents:[8,4,1,""],make_new_entries:[8,4,1,""],start_new_scan_list:[8,4,1,""],update_scans_csv:[8,4,1,""]},"datman.scan_list.ScanEntryABC":{get_target_name:[8,2,1,""]},"datman.scanid":{BIDSFile:[9,1,1,""],DatmanIdentifier:[9,1,1,""],Identifier:[9,1,1,""],KCNIIdentifier:[9,1,1,""],get_field:[9,4,1,""],get_kcni_identifier:[9,4,1,""],get_session_num:[9,4,1,""],is_phantom:[9,4,1,""],is_scanid:[9,4,1,""],is_scanid_with_session:[9,4,1,""],make_filename:[9,4,1,""],parse:[9,4,1,""],parse_bids_filename:[9,4,1,""],parse_filename:[9,4,1,""]},"datman.scanid.DatmanIdentifier":{get_xnat_experiment_id:[9,2,1,""],get_xnat_subject_id:[9,2,1,""],pha_pattern:[9,3,1,""],pha_re:[9,3,1,""],scan_pattern:[9,3,1,""],scan_re:[9,3,1,""],session:[9,2,1,""]},"datman.scanid.Identifier":{get_bids_name:[9,2,1,""],get_full_subjectid:[9,2,1,""],get_full_subjectid_with_timepoint:[9,2,1,""],get_full_subjectid_with_timepoint_session:[9,2,1,""],get_xnat_experiment_id:[9,2,1,""],get_xnat_subject_id:[9,2,1,""],match:[9,2,1,""]},"datman.scanid.KCNIIdentifier":{get_xnat_experiment_id:[9,2,1,""],get_xnat_subject_id:[9,2,1,""],pha_pattern:[9,3,1,""],pha_re:[9,3,1,""],scan_pattern:[9,3,1,""],scan_re:[9,3,1,""]},"datman.utils":{XNATConnection:[10,1,1,""],cd:[10,1,1,""],check_dependency_configured:[10,4,1,""],check_returncode:[10,4,1,""],define_folder:[10,4,1,""],filter_niftis:[10,4,1,""],get_all_headers_in_folder:[10,4,1,""],get_archive_headers:[10,4,1,""],get_extension:[10,4,1,""],get_files_with_tag:[10,4,1,""],get_folder_headers:[10,4,1,""],get_loaded_modules:[10,4,1,""],get_relative_source:[10,4,1,""],get_resources:[10,4,1,""],get_subject_metadata:[10,4,1,""],get_tarfile_headers:[10,4,1,""],get_xnat_credentials:[10,4,1,""],get_zipfile_headers:[10,4,1,""],has_permissions:[10,4,1,""],is_dicom:[10,4,1,""],is_named_like_a_dicom:[10,4,1,""],locate_metadata:[10,4,1,""],make_temp_directory:[10,4,1,""],make_zip:[10,4,1,""],makedirs:[10,4,1,""],nifti_basename:[10,4,1,""],read_blacklist:[10,4,1,""],read_checklist:[10,4,1,""],read_credentials:[10,4,1,""],remove_empty_files:[10,4,1,""],run:[10,4,1,""],run_dummy_q:[10,4,1,""],split_path:[10,4,1,""],splitext:[10,4,1,""],submit_job:[10,4,1,""],update_blacklist:[10,4,1,""],update_checklist:[10,4,1,""],validate_subject_id:[10,4,1,""],write_metadata:[10,4,1,""]},"datman.xnat":{XNATExperiment:[11,1,1,""],XNATObject:[11,1,1,""],XNATScan:[11,1,1,""],XNATSubject:[11,1,1,""],get_auth:[11,4,1,""],get_connection:[11,4,1,""],get_port_str:[11,4,1,""],get_server:[11,4,1,""],xnat:[11,1,1,""]},"datman.xnat.XNATExperiment":{download:[11,2,1,""],get_autorun_ids:[11,2,1,""],get_resources:[11,2,1,""]},"datman.xnat.XNATScan":{is_derived:[11,2,1,""],is_multiecho:[11,2,1,""],raw_dicoms_exist:[11,2,1,""],set_datman_name:[11,2,1,""],set_tag:[11,2,1,""]},"datman.xnat.xnat":{auth:[11,3,1,""],create_resource_folder:[11,2,1,""],delete_resource:[11,2,1,""],dismiss_autorun:[11,2,1,""],find_project:[11,2,1,""],find_subject:[11,2,1,""],get_dicom:[11,2,1,""],get_experiment:[11,2,1,""],get_experiment_ids:[11,2,1,""],get_projects:[11,2,1,""],get_resource:[11,2,1,""],get_resource_archive:[11,2,1,""],get_resource_ids:[11,2,1,""],get_resource_list:[11,2,1,""],get_scan:[11,2,1,""],get_scan_ids:[11,2,1,""],get_subject:[11,2,1,""],get_subject_ids:[11,2,1,""],headers:[11,3,1,""],make_experiment:[11,2,1,""],make_subject:[11,2,1,""],open_session:[11,2,1,""],put_dicoms:[11,2,1,""],put_resource:[11,2,1,""],rename_experiment:[11,2,1,""],rename_subject:[11,2,1,""],server:[11,3,1,""],session:[11,3,1,""]},datman:{config:[2,0,0,"-"],dashboard:[3,0,0,"-"],exceptions:[4,0,0,"-"],fs_log_scraper:[5,0,0,"-"],header_checks:[6,0,0,"-"],scan:[7,0,0,"-"],scan_list:[8,0,0,"-"],scanid:[9,0,0,"-"],utils:[10,0,0,"-"],xnat:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"0rc1":13,"212_spectra":13,"abstract":[8,9],"case":[2,9],"class":[0,2,5,7,8,9,10,11],"default":[2,4,7,9,10,11],"export":14,"function":[0,2,3,6,8,9,10,13],"int":9,"new":[10,11,13],"return":[2,3,8,9,10,11],"short":13,"static":5,"super":8,"switch":[2,10],"true":[7,10,11],"var":10,"while":[9,11],For:[4,9,13,14],IDs:[3,9,10,11],NOT:11,One:2,TRs:13,That:8,The:[2,5,7,8,9,10,11,13,14],These:[2,10,13],Use:8,Using:9,Will:[10,11],_01:7,__init__:[2,8],_bad_fd:13,_corr:13,_fd:13,_mr:9,_qascripts_bold:13,_qascripts_dti:13,_scanlength:13,_se:9,_session:7,_sfnr:13,_spectra:13,_stat:13,abc:[9,11],about:[5,7,10],abov:13,absolut:[2,7,11,13],accept:[9,10],access:[7,10,11],accident:10,acq:9,acquisit:[9,13],across:13,action:11,activ:13,adapt:2,add:[10,13,14],add_scan:3,add_sess:3,add_subject:3,added:[11,14],addit:[2,10],adni:13,after:[7,10],aggreg:5,all:[2,7,9,10,11,12,13],alloc:10,allow:[2,9],allow_parti:10,alphanumer:9,alreadi:[8,11],also:[10,11,13,14],alwai:9,anaconda:13,analysi:13,analyt:13,ani:[5,7,9,10,11,14],anoth:9,api:[11,13],appear:11,appli:[3,9,11],applic:13,archiv:[2,10,11,13],argslist:10,argument:[3,10],aris:13,artifact:13,asid:9,assess:13,asset:13,associ:11,assum:[7,10],assur:13,attempt:[3,10,11],attribut:7,auth:11,automat:13,autorun:11,averag:13,back:10,bad:13,base:[2,4,5,7,8,9,10,11],base_nam:11,basenam:10,bash:14,becaus:11,becom:[7,13],been:[2,10],befor:[10,11],behavior:11,being:[10,13],belong:[10,11],below:9,best:10,between:[2,5,13],bewar:11,bid:[9,10],bids_id:10,bids_nam:3,bids_s:10,bids_sess:3,bidsfil:9,blacklist:10,blank:10,block:10,bold:13,bool:[10,11],both:2,brain:13,bug:12,bytestr:12,cach:11,calcul:13,call:[8,9,11],camh:13,can:[2,3,8,9,10,11,14],candid:10,care:10,caus:[9,11],certain:[7,9,11,14],chang:[7,9,10,11,12],charact:9,chavez:13,check:[3,10],check_bval:6,check_dependency_configur:10,check_diff:5,check_returncod:10,checklist:[10,12],choose_standard_sub:5,chronolog:13,circumv:10,clean:11,clock:10,clone:13,cmd:10,cmd_arg:5,code:[3,8,9,10,12],col_head:5,collect:[10,13],com:13,comma:10,command:[10,14],comment:10,compar:6,compare_head:6,compil:9,complet:[10,11,13],compon:10,comput:2,conda:13,config:[0,1,7,10,11,14],configexcept:4,configur:[2,10,11,13],conflict:2,conform:[9,10,11],connect:[11,13],consequ:11,consid:[2,10],consist:9,construct_diff:6,consult:11,contain:[5,8,9,10,11],content:[7,10],context:10,conveni:14,convent:[7,9,10,11],convers:12,convert:[3,9],core:10,correct:[3,8,10,13],correctli:10,correl:13,correspond:9,corrupt:13,could:[13,14],cpu_cor:10,creat:[3,7,8,9,11,13],create_resource_fold:11,creation:11,cred_fil:10,criteria:3,csv:[8,10,13],current:[2,7,10,11],cut:13,dashboard:[0,1,4,10],dashboard_requir:3,dashboardexcept:[3,4],data:[10,11,13],data_flow:13,databas:[3,10,13],datatyp:13,date:[3,7],date_str:5,datman:[0,14],datman_asset:13,datman_id:8,datmanidentifi:9,datmannam:7,decemb:13,decod:12,decor:3,decorrel:13,def:8,defaults_onli:2,defin:[2,4,8,10,11,13,14],define_fold:10,definit:13,delet:[10,11],delete_resourc:11,depend:[10,13],deposit:11,deprec:12,deriv:8,describ:9,descript:[3,9,10,13],design:13,dest_dir:8,dest_fold:11,dest_zip:10,destin:[8,10],detail:[5,9,10],deviat:13,dicom:[8,9,10,11,13],dict:[9,10,11],dictat:10,dictionari:[2,9,10,11],diff:6,differ:[2,5,11,13],differenti:2,dir:[9,10],direct:13,directli:10,directori:[2,7,8,10],disabl:11,discov:2,dismiss:11,dismiss_autorun:11,displac:13,distinguish:13,dm_config:[2,14],dm_link:12,dm_system:[2,10,14],dm_task_fil:12,doe:[7,9,10,11,13],doesn:[10,11,13],doesnt:[9,10,11],don:[10,13],done:10,dont:10,download:11,downstream:10,drift:13,drift_bx:13,driftperc:13,drop:10,dryrun:10,dti01:9,dti15t:2,dti3t:2,dti:[2,6,9,13],dure:13,each:[8,10,11,13,14],easi:7,echo:9,either:[2,3,10],empti:[5,10,11],enabl:2,encod:13,enough:8,ensur:[9,10],entir:10,entri:[8,10],entryclass:8,env:13,env_var:10,environ:[2,10,11,13,14],environmenterror:10,error:4,etc:[10,13],even:11,everi:2,exact:2,exam:[10,13],exampl:[8,9,10,13],examplescanentri:8,except:[0,1,2,10,11],exclud:9,exist:[2,10,11,13],exit:10,expect:[2,3,5,6,8,10],expected_kei:5,exper_id:11,experi:11,experienc:11,experiment_json:11,experiment_nam:11,export_set:2,exportexcept:4,exportinfo:2,exportset:2,ext:9,extens:10,extract:2,fail:[10,11],failur:[10,11],fals:[2,3,5,6,10,11],fbirn:13,fbrin:13,field:[2,5,6,8,9,10],file:[2,3,5,6,7,8,9,10,11,13,14],file_path:[6,11],filenam:[2,10,11],filename_requir:3,fileobj:10,filesystem:10,filter:3,filter_nifti:10,find:[9,10,11],find_bval:6,find_project:11,find_subject:11,findabl:10,finish:11,first:[2,3,11,12],fix:12,flag:[9,10],fluctuat:13,fmri:13,folder:[2,5,10,11,13],foldernam:11,follow:13,fool:10,format:[7,8,9,10,11],found:[2,3,5,10,11],fpath:10,framewis:13,freesurf:5,freesurfer_fold:5,friedman:13,from:[2,3,5,7,9,10,11,12,13,14],fs_log_scrap:[0,1],fs_output_fold:5,fslog:5,full:[2,9,10,14],fulli:10,further:13,fuzzi:10,gener:[5,8,10,13],generate_scan_list:8,genet:13,get:[2,9,10,11],get_all_headers_in_fold:10,get_archive_head:10,get_arg:5,get_auth:11,get_autorun_id:11,get_bids_nam:9,get_bids_scan:3,get_bids_subject:3,get_connect:11,get_dat:5,get_default_us:3,get_dicom:11,get_experi:11,get_experiment_id:11,get_extens:10,get_field:9,get_files_with_tag:10,get_folder_head:10,get_full_subjectid:9,get_full_subjectid_with_timepoint:9,get_full_subjectid_with_timepoint_sess:9,get_kcni_identifi:9,get_kei:2,get_kernel:5,get_loaded_modul:10,get_nifti:5,get_path:2,get_port_str:11,get_project:[3,11],get_relative_sourc:10,get_resourc:[10,11],get_resource_arch:11,get_resource_id:11,get_resource_list:11,get_scan:[3,11],get_scan_id:11,get_scan_list_cont:8,get_serv:11,get_sess:3,get_session_num:9,get_sit:2,get_study_bas:2,get_study_subject:3,get_study_tag:2,get_subject:[3,5,11],get_subject_id:11,get_subject_metadata:10,get_tag:2,get_tagged_dcm:7,get_tagged_nii:7,get_tarfile_head:10,get_target_nam:8,get_xnat_credenti:10,get_xnat_experiment_id:9,get_xnat_project:2,get_xnat_subject_id:9,get_zipfile_head:10,git:13,github:[12,13],give:[2,11],given:[2,3,7,9,10,11],global:13,global_corr:13,gmean:13,gmean_bx:13,goe:8,gold:6,good:13,gov:13,grab:11,grace:10,greatli:11,group:9,gui:11,handl:10,handle_diff:6,has:[2,3,10,11],has_permiss:10,have:[10,13],head:13,header:[6,8,9,10,11,13],header_check:[0,1],help:3,here:[8,9,13],higher:13,hold:[7,10],how:9,html:13,http:13,httperror:11,human:13,id_typ:9,ident:[7,9],identif:9,identifi:[2,3,7,9,10,11,13],ignor:[6,10],ignore_default:2,ignored_field:6,imag:[10,13],img:13,imposs:11,includ:[7,9,10],incorrect:10,index:13,info:9,inform:[0,3,5,7,8,13],initi:10,inputexcept:4,instal:[2,10,13],install_config:2,instanc:[2,3,7,8,9,10,11,13],instantan:13,instead:[10,12,14],integr:10,intend:8,intens:13,intensitii:13,interact:[11,14],interchang:11,interest:[10,11],interf:11,interfac:13,is_deriv:11,is_dicom:10,is_multiecho:11,is_named_like_a_dicom:10,is_open:3,is_phantom:9,is_scanid:9,is_scanid_with_sess:9,isn:3,isnt:10,issu:4,item:10,its:9,itself:2,januari:13,job:10,job_nam:10,joblist:10,join:2,jonathan:13,josephdviviano:13,json:6,json_cont:6,json_fil:6,json_path:6,just:[2,10,12],kcni:9,kcniidentifi:9,kei:[2,9,10],keyerror:11,keyword:13,kind:13,know:13,kwarg:3,label:11,lack:10,larg:13,launch:11,lead:10,least:2,left:5,level:[1,13],librari:[8,13],like:11,line:[5,10],linear:13,link:13,list:[3,5,8,10,11],list_of_nam:10,load:10,load_yaml:2,loadedmodul:10,local:2,locat:[2,3,10],locate_metadata:10,log:[5,10,14],log_dir:10,log_field:5,log_unam:5,look:[10,13],low:13,lower:9,lowest:13,made:[7,11],magn:13,magphan_adni_manu:13,mai:[7,10],main:2,maintain:9,major:13,make:[7,8,10,11],make_experi:11,make_filenam:9,make_new_entri:8,make_standard:5,make_subject:11,make_temp_directori:10,make_zip:10,makedir:10,manag:[8,9,10,13],mangl:[9,10],map:[2,9,10,11],map_xnat_archive_to_project:2,mark:11,match:[2,3,7,9,10,11,13],matlabpath:13,maxabsrm:13,maximum:13,maxrelrm:13,mean:13,mean_fd:13,mean_sfnr:13,meanabsrm:13,meanrelrm:13,meant:11,measur:13,measures:13,mem:10,merg:2,messag:[4,10],metadata:11,metadata_path:8,metadataexcept:[4,10],method:[0,9],metric:13,might:9,minu:10,miss:7,mod:9,modal:13,modifi:[9,11,12],modul:[0,1,13,14],more:[9,10,11,13],most:[2,5,13],mostli:11,motion:13,mri:13,multicent:13,multipl:[2,3,9],mung:10,must:[9,10,14],my_zip_list:8,myriad:13,n_bad_fd:13,name:[2,3,7,8,9,10,11,13,14],nativ:9,nb0:13,ncbi:13,ndir:13,need:[11,13,14],network:13,neuroimag:13,new_entri:8,new_nam:11,nibabel:13,nicknam:10,nifti:[6,7,13],nifti_basenam:10,nih:13,nii:[10,13],nipi:13,nlm:13,nois:13,non:[9,10,11],none:[2,3,4,5,6,9,10,11],note:[10,11],noth:11,num:9,number:[9,10,13],numer:9,obei:7,object:[2,5,7,8,9,10,11],obnoxi:11,obtain:13,obvious:11,off:[10,13],old_nam:11,ommit:10,one:[9,11,13,14],ones:[12,13],onli:[2,10,11,13],onto:2,open:11,open_sess:11,open_zipfil:10,option:[3,9,10,11,13],order:10,org:13,organ:[10,11],orig_id:9,origin:[9,10],oserror:10,other:[9,10,11,13],otherwis:10,our:13,out:7,outcount:13,outcount_bx:13,outlier:13,outmax:13,outmax_bx:13,outmean_bx:13,outmin:13,output:[5,8,10,11],output_path:6,over:13,overrid:2,overridden:2,overwrit:13,overwritten:10,own:11,packag:[0,13],page:13,paramet:[3,5,7,9,10,11],parent:[7,10,11],parentdir:10,pars:[4,5,9,10,11,13],parse_bids_filenam:9,parse_fil:6,parse_filenam:[9,10],parse_recon_don:5,parseexcept:[4,7,9,10],part:[2,10],partial:10,particip:4,partit:10,pass:8,password:[10,11,14],path:[2,5,7,9,10,11,14],path_typ:2,patientnam:8,pattern:2,pdf:13,pep8:12,per:13,perform:13,permiss:10,person:10,pha:9,pha_:9,pha_pattern:9,pha_r:9,pha_typ:9,phantom:[3,9,13],phantomlab:13,pipelin:[10,11,13],place:13,pleas:[2,13],png:13,point:13,port:11,portion:9,portnum:11,possibl:2,post:11,power:13,practic:[10,13],pre:13,prearchiv:13,preferenti:10,prefix:[10,13],preserv:10,prevent:11,primari:13,problem:13,process:[10,13],processed_scan:8,produc:11,program:[10,13],program_nam:10,project:[2,11,13],project_set:7,properti:[2,9],protocol:13,provid:10,pubm:13,pull:[3,12],put:10,put_dicom:11,put_resourc:11,python3:12,python:[10,12,13],pythonpath:13,qascript:13,qc_:13,qcing:13,qcmon:13,queri:11,queu:[10,11],queue:10,radiu:13,rais:[2,3,7,9,10,11],rather:13,ratio:13,raw:13,raw_dicoms_exist:11,read:[2,10,11,13],read_blacklist:10,read_checklist:10,read_credenti:10,read_json:6,read_log:5,real:10,rec:9,receiv:3,recon_don:5,recurs:10,redcap:[12,14],redcap_token:14,ref:12,refer:11,reject:9,rel:[5,13],releas:12,remov:[10,12],remove_empty_fil:10,remove_field:6,renam:11,rename_exp:11,rename_experi:11,rename_subject:11,repeat:10,repeatedli:10,report:[5,11,13],request:11,requir:[11,13],reson:13,resourc:11,resource_group_id:11,resource_id:11,respons:11,rest:13,restrict:[2,9,11],result:[2,9],retri:[10,11],retriev:[9,11],returncod:10,reus:3,roi:13,root:13,round:12,run:[5,9,10,11,13,14],run_dummy_q:10,same:[3,10,11,13],save:[8,10],scan:[0,1,8,9,10,11,13],scan_entry_class:8,scan_id:11,scan_json:11,scan_list:[0,1],scan_path:8,scan_pattern:9,scan_r:9,scanentryabc:8,scanid:[0,1,3,7,10,12],scanid_requir:3,scans_csv:8,scheme:7,scipi:13,scrape:5,scrape_log:5,script:[5,8,10,12,13,14],search:[2,11,13],see:[9,10,13],seemingli:11,self:8,separ:10,seri:[3,6,7,9,10,13],series_json:6,series_map:2,series_path:6,seriesdescript:9,server:[11,14],server_cach:11,session:[2,4,7,9,10,11],set:[2,3,7,9,10,11,13,14],set_datman_nam:11,set_studi:2,set_study_statu:3,set_tag:11,setup:13,share:2,shell:[10,14],shell_cmd:10,should:[8,9,10,11,14],sign:10,signal:13,similar:[9,10],sinc:10,singl:[7,9,10,11,13],sit:13,site:[2,3,9,10,11,14],site_set:2,site_tag:2,slightli:10,slurm:10,snr:13,sofia:13,some:[9,14],sometim:11,sophist:10,sourc:[10,14],source_dir:10,source_id:3,space:10,special:10,specialquot:10,specif:[0,2,3,10,11],specifi:[2,3,9,10,11],spectra:13,spin:[2,3],split:10,split_path:10,splitext:10,spn01:[2,3],spn01_zhh_0018_01_01_rst_06_rest:13,spuriou:13,squar:13,stack:13,stackspec:13,standard:[5,6,13],standard_json:6,standard_log:5,standard_path:6,standards_dict:5,standards_field:5,start_new_scan_list:8,state:[11,13],statu:11,stdout:10,stop_after_first:10,store:11,str:[9,10,11],string:[3,9,10,11],stroke:13,structur:[11,13],stuck:11,studi:[2,3,4,9,10,11,13],study_config:2,study_config_fil:2,study_nam:2,study_requir:2,study_site_id_timepoint:7,study_tag:2,style:[3,9,10],sub:4,subclass:[8,9],subfold:[10,11],subject:[3,5,7,8,9,10,11,12,13],subject_field:5,subject_id:[7,10,11],subject_json:11,subject_log:5,subject_nam:11,submit:10,submit_job:10,submodul:0,success:[10,11],suffix:[9,10],suppli:[2,10],support:[9,10],system:[2,10,14],system_config:2,systemat:[8,13],systemset:14,tag:[2,3,7,9,10,13],tag_map:11,taginfo:2,take:[2,5,10,13],taken:13,tar:10,tarbal:[10,13],target:10,task:9,technic:9,tempfil:11,tempor:13,temporari:11,tend:11,than:11,thei:[2,10,13],them:[2,9,11],thi:[2,3,7,8,9,10,11,13],thing:13,those:9,though:11,three:13,through:[11,13],tigrlab:13,time:[9,10,13],timepoint:9,timeseri:13,tmp:10,todai:13,token:14,toler:6,top:1,track:13,translat:9,tsnr:13,tsnr_bx:13,tumor:13,tupl:[9,11],two:[2,13],txt:10,type:[2,9,10,11,13],unabl:11,unassign:13,undefinedset:[2,4],under:[11,13],unexpect:11,uniform:7,unless:10,unset:11,until:10,updat:[10,12],update_blacklist:10,update_checklist:10,update_scans_csv:8,upload:11,uppercas:9,uri:11,url:11,usag:13,use:[8,9,10,11,13,14],use_bid:10,used:[2,4,8,9,10,11,13],useful:[5,10],user:[9,11,14],user_nam:10,usernam:11,uses:[10,13],using:[11,13],ut1:9,ut2:9,util:[0,1,6],uto:9,valid:[9,11],validate_subject_id:10,valu:[2,6,7,9,10,13],variabl:[2,10,11,12,13],varnam:14,varvalu:14,vector:13,verbos:10,verifi:10,verify_standard:5,version:[10,12],versu:11,voxel:13,wai:8,walltim:10,want:[9,10],warn:7,weight:13,well:3,were:10,what:13,when:[3,8,9,10,11,13],where:[2,8,10,11],whether:[10,11],which:[2,10,13],who:[9,10],whole:13,wide:[2,11,14],wish:10,within:[3,9,10,11],without:[2,10,13],work:10,workdir:10,workflow:11,wrap:3,wrapper:2,write:[10,13],write_diff_log:6,write_metadata:10,wrong:8,www:13,xml:11,xnat:[0,1,2,4,13,14],xnat_connect:11,xnat_cr:10,xnat_pass:14,xnat_url:10,xnat_us:14,xnatconnect:10,xnatexcept:[4,11],xnatexperi:11,xnatobject:11,xnatport:11,xnatscan:11,xnatsubject:11,yaml:2,yet:10,yml:7,you:[2,9,10,13,14],your:[13,14],zero:10,zip:[8,10,11],zip_fil:8,zip_nam:11,zipfil:[10,11,13]},titles:["Library API (application program interface)","datman package","datman.config module","datman.dashboard module","datman.exceptions module","datman.fs_log_scraper module","datman.header_checks module","datman.scan module","datman.scan_list module","datman.scanid module","datman.utils module","datman.xnat module","What\u2019s new?","datman","Installation","&lt;no title&gt;","Usage"],titleterms:{"0rc1":12,"new":12,api:0,applic:0,config:2,configur:16,content:13,control:13,dashboard:3,datman:[1,2,3,4,5,6,7,8,9,10,11,13],decemb:12,except:4,file:16,fs_log_scrap:5,header_check:6,indic:13,instal:14,interfac:0,introduct:13,januari:12,librari:0,modul:[2,3,4,5,6,7,8,9,10,11],option:14,overview:13,packag:1,program:0,qualiti:13,requir:14,scan:7,scan_list:8,scanid:9,submodul:1,tabl:13,usag:16,util:10,variabl:14,what:12,xnat:11}})