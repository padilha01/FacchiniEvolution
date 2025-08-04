HIGHLIGHT    = 1;
USETEXTLINKS = 1;
STARTALLOPEN = 0;
PATH_ICONS   = './ARPO_Images/';
PATH_LINKS   = './ARPO_Data/';

//PROJECT*******************************************************************************************
  foldersTree = GetFolder('<b>Facchini Evolution</b>', 'Welcome.html');
  foldersTree.treeID = 'Frameset';
//**************************************************************************************************


//GROUP*********************************************************************************************
  group   = AddGroup(foldersTree, GetFolder('<b>Almoxarifado</b>', 'Welcome.html'), true);
//**************************************************************************************************
    AddModel(150, group                            , GetFolder('<b>Atendimento de Reserva</b>'                                   , PATH_LINKS+'MA35D8785-EBE7-484C-ACDA-8FCDF71168B1_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Atendimento Remessa Venda</b>'                                , PATH_LINKS+'ME1A49159-2B87-4F57-B74D-D49E23C02395_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Invent�rio</b>'                                               , PATH_LINKS+'M1F7E3071-5210-4C90-BE02-F670B53724AE_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Invent�rio Coletor</b>'                                       , PATH_LINKS+'M1BBA6221-3358-40D7-9288-46985D6A07E0_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Recebimento de Materiais Fornecedor</b>'                      , PATH_LINKS+'MA94C2B18-98B3-4F84-9385-1550EF4332F9_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Recebimento de Material Interfabrica</b>'                     , PATH_LINKS+'M10766931-F8FD-47A6-942A-E209280824AD_Z075.HTML'), false);//LEVEL-ONE-MODEL******************


//GROUP*********************************************************************************************
  group   = AddGroup(foldersTree, GetFolder('<b>Manuten��o</b>', 'Welcome.html'), true);
//**************************************************************************************************
ME87F6C7FDDE1495CA1BB820908F74347 = 
    AddModel(150, group                            , GetFolder('<b>Manuten��o Corretivas e Emergencial Veiculos e Equip</b>'     , PATH_LINKS+'ME87F6C7F-DDE1-495C-A1BB-820908F74347_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Analizar e planejar Nota de Manuten��o e cria ordem de manuten��o', PATH_LINKS+'M4E5F294A-34AC-41FE-8088-207AA9DEE71B_Z075.HTML'), false);
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Criar nota PM'                                                   , PATH_LINKS+'MF48DE3AD-2A7A-48D5-B9CB-852FE10A263E_Z075.HTML'), false);
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Encerramento t�cnico'                                            , PATH_LINKS+'MFB598E30-25BF-49CC-8657-F2B439CCC8C2_Z075.HTML'), false);
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Executa a ordem impressa'                                        , PATH_LINKS+'M7A2509D4-C5DC-46E8-8BAB-FC858AAC9E48_Z075.HTML'), false);
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Liberar Ordem de Manuten��o'                                     , PATH_LINKS+'M7C5BF97F-03A9-4262-B20D-6B8737D7F873_Z075.HTML'), false);
  M43DF2E91BF9B43E7AED1D2B3996CCEBB = 
    AddModel(150, group                            , GetFolder('<b>Manuten��o Preventiva Veiculos e Equip</b>'                   , PATH_LINKS+'M43DF2E91-BF9B-43E7-AED1-D2B3996CCEBB_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Analisar ordens pendentes de libera��o'                          , PATH_LINKS+'M0E79C463-3C81-42C8-BB69-987EF084E152_Z075.HTML'), false);
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Criar planos de manuten��o'                                      , PATH_LINKS+'M69A26810-0FF7-4355-B0D1-B705F0723833_Z075.HTML'), false);
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Encerramento t�cnico'                                            , PATH_LINKS+'ME1BB11C4-A9B1-46F0-AB36-D2ED98310235_Z075.HTML'), false);
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Executa a ordem impressa'                                        , PATH_LINKS+'MAACD65F2-49A7-446D-A058-EA93C25D04DB_Z075.HTML'), false);
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Ordens criadas aut.'                                             , PATH_LINKS+'M9B7932A2-86FD-4E9E-AE85-136ACBE3307C_Z075.HTML'), false);
  M3893284DD15147A1881AD6EFA3F2E667 = 
    AddModel(150, group                            , GetFolder('<b>NF Remessa para conserto</b>'                                 , PATH_LINKS+'M3893284D-D151-47A1-881A-D6EFA3F2E667_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Atender Ordem de Frete'                                          , PATH_LINKS+'M661EFB5A-EC6B-4272-BADC-440CEE8F2045_Z075.HTML'), false);
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Criar ordem de frete'                                            , PATH_LINKS+'M2CB81856-4ABA-452F-8836-234D0FCDF4C3_Z075.HTML'), false);
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Implantar Pedido'                                                , PATH_LINKS+'M6154D286-B47B-4444-9441-9F99033CA70C_Z075.HTML'), false);
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Subcontrata��o ( Terceiro )'                                     , PATH_LINKS+'M3AC9D0B5-52BE-4D45-A9AA-757A1053C713_Z075.HTML'), false);
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Transporte Pr�prio'                                              , PATH_LINKS+'MBD9D6948-7F67-4D87-AC99-1013531A4338_Z075.HTML'), false);
  M5EEBE5A65565489BA42DD77B8A892B16 = 
    AddModel(150, group                            , GetFolder('<b>NF Transfer�ncia</b>'                                         , PATH_LINKS+'M5EEBE5A6-5565-489B-A42D-D77B8A892B16_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M5EEBE5A65565489BA42DD77B8A892B16, GetFolder('Atender Ordem de Frete'                                          , PATH_LINKS+'MDBB1BA33-AEAF-4386-9C35-4A416FD3935A_Z075.HTML'), false);
    AddModel(150, M5EEBE5A65565489BA42DD77B8A892B16, GetFolder('Criar ordem de frete'                                            , PATH_LINKS+'MD0F33420-DE46-4C22-A4B4-6AC359F37C86_Z075.HTML'), false);
  MB3960325951548209FE312B3D087D5EA = 
    AddModel(150, group                            , GetFolder('<b>NF Venda</b>'                                                 , PATH_LINKS+'MB3960325-9515-4820-9FE3-12B3D087D5EA_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, MB3960325951548209FE312B3D087D5EA, GetFolder('Cria e atende Ordem de Frete'                                    , PATH_LINKS+'MF096B45B-989D-4CDE-BA6C-D1D59D292E2A_Z075.HTML'), false);
    AddModel(150, MB3960325951548209FE312B3D087D5EA, GetFolder('Implantar Pedido'                                                , PATH_LINKS+'M81AF9770-C14F-4163-B6D8-944370D0005C_Z075.HTML'), false);

//GROUP*********************************************************************************************
  group   = AddGroup(foldersTree, GetFolder('<b>Transporte</b>', 'Welcome.html'), true);
//**************************************************************************************************
  M755A1D4B5DD848B08ED6401F8B0847E9 = 
    AddModel(150, group                            , GetFolder('<b>CARGA INTERF�BRICA</b>'                                       , PATH_LINKS+'M755A1D4B-5DD8-48B0-8ED6-401F8B0847E9_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M755A1D4B5DD848B08ED6401F8B0847E9, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'MC043FC83-CA85-4EF1-8AC3-FD2E8BE6162B_Z075.HTML'), false);
    AddModel(150, M755A1D4B5DD848B08ED6401F8B0847E9, GetFolder('Criar ordem de Frete'                                            , PATH_LINKS+'M12AAAA40-ABFF-45F3-B98A-66F4FFD64075_Z075.HTML'), false);
  M80E5D1A7BEE141E3B1E22DFD2EA4C216 = 
    AddModel(150, group                            , GetFolder('<b>Cargas Viagens - Painel</b>'                                  , PATH_LINKS+'M80E5D1A7-BEE1-41E3-B1E2-2DFD2EA4C216_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'M108EDE52-1364-4E8A-8387-5D07A43581A4_Z075.HTML'), false);
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Atender ordem de frete ( subcontrata��o )'                       , PATH_LINKS+'MC7D03286-477D-497A-B303-8B8D0D0029AD_Z075.HTML'), false);
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Listar ordem de frete'                                           , PATH_LINKS+'M8C527D70-D639-4482-BE90-2C9EF93B10F1_Z075.HTML'), false);
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Listar unidade de frete'                                         , PATH_LINKS+'M4E26BA7C-B0B1-4555-ABBB-C6EB49014A23_Z075.HTML'), false);
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Status de carregamento'                                          , PATH_LINKS+'MC714C110-2D6D-49CA-9A4A-AADEC334CAD5_Z075.HTML'), false);
  MEA06A46287764F2898C44C9572E2A7C6 = 
    AddModel(150, group                            , GetFolder('<b>Coletas Fornecedores</b>'                                     , PATH_LINKS+'MEA06A462-8776-4F28-98C4-4C9572E2A7C6_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'MD48D020E-CB5C-4906-BD79-A7079187497E_Z075.HTML'), false);
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Atender ordem de frete ( subcontrata��o )'                       , PATH_LINKS+'MAF0FE55B-1BD7-455A-BE6F-E5573CFC9B2E_Z075.HTML'), false);
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Lan�ar CTE'                                                      , PATH_LINKS+'M6DD68866-8100-47EA-A420-D00ABD50A9A2_Z075.HTML'), false);
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Listar ordem de frete'                                           , PATH_LINKS+'MDEC65EF9-E6D5-4AD5-8D20-56E4EF520AD9_Z075.HTML'), false);
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Pedido de compra'                                                , PATH_LINKS+'M03C6F880-E442-401E-AD46-CE037E3E63D0_Z075.HTML'), false);
  M418F35F2D5514D778FADB92CA8B83861 = 
    AddModel(150, group                            , GetFolder('<b>Coletas Importa��o</b>'                                       , PATH_LINKS+'M418F35F2-D551-4D77-8FAD-B92CA8B83861_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M418F35F2D5514D778FADB92CA8B83861, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'M1ACFD76D-0AB1-456A-986B-3BB629577F88_Z075.HTML'), false);
    AddModel(150, M418F35F2D5514D778FADB92CA8B83861, GetFolder('Listar ordem de frete'                                           , PATH_LINKS+'MC357D2D8-BC10-433C-B571-CE25B66FBC42_Z075.HTML'), false);
    AddModel(150, M418F35F2D5514D778FADB92CA8B83861, GetFolder('Pedido de compra'                                                , PATH_LINKS+'M76A30DB8-8E51-494D-8951-DAD89D4F9A30_Z075.HTML'), false);
  M5360B03CE19549B7A11383154ECE5341 = 
    AddModel(150, group                            , GetFolder('<b>Entrega Produto Novo</b>'                                     , PATH_LINKS+'M5360B03C-E195-49B7-A113-83154ECE5341_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'MBE22374F-EBA8-46AD-A6A0-6B99954A252F_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Atender ordem de frete ( subcontrata��o )'                       , PATH_LINKS+'MF41BED3D-D0A4-4576-B61D-1B463A9F6F82_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Lan�ar CTE'                                                      , PATH_LINKS+'MFF3D8345-B194-4DFF-9E89-A97231FDFD7E_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Listar ordem de frete'                                           , PATH_LINKS+'MC9F68D13-8F7B-43B0-AE8B-9F14FB91DFE2_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Listar unidade de frete'                                         , PATH_LINKS+'M2B50BEE3-A528-4692-96E9-885D4D2C5400_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Pedido de venda'                                                 , PATH_LINKS+'M406D3898-67C4-4F2F-8672-875E86F9CC1C_Z075.HTML'), false);
  MA187231402474BC2A865A58593FBC2E4 = 
    AddModel(150, group                            , GetFolder('<b>Licen�as de Transporte</b>'                                   , PATH_LINKS+'MA1872314-0247-4BC2-A865-A58593FBC2E4_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, MA187231402474BC2A865A58593FBC2E4, GetFolder('Licen�a Carga Excedente'                                         , PATH_LINKS+'M916ED476-804C-437A-AD4F-46F3A46278F4_Z075.HTML'), false);
    AddModel(150, MA187231402474BC2A865A58593FBC2E4, GetFolder('Licen�a Produto Novo'                                            , PATH_LINKS+'ME44526E9-A016-49F4-BB42-16953C607422_Z075.HTML'), false);
    AddModel(150, group                            , GetFolder('<b>Presta��o de contas Veiculos Sem NF</b>'                      , PATH_LINKS+'M3467E64E-323F-4256-98C9-308CA3AAA239_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Presta��o de contas Viagem</b>'                               , PATH_LINKS+'M884CCE6B-2D18-4A45-A09F-2A092B0EA770_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Solicitar Seguro e Escoltas</b>'                              , PATH_LINKS+'MADB5A395-362D-49D5-99D9-F1FE95245893_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
